/* eslint no-var: 0, vars-on-top: 0, no-console: 0 */

var fs = require('fs-extra');
var path = require('path');
var rimraf = require('rimraf');
var unzip = require('unzip');
var replace = require('replace');
var request = require('superagent');
var through = require('through2');

var CONTROLLERS_FOLDER = 'Controllers';
var ARCHIVE_LIB_FOLDER = 'lib';
var ARCHIVE_PACKAGE_JSON = 'package.json';
var PACKAGE_JSON_PATH = path.join(__dirname, '../../package.json');

function generateIndex(indexPath, controllersPath) {
  console.log('Generate Index');

  var indexContent = '' +
    'function index() {}\n\n' +
    "index.configuration = require('./configuration');\n" +
    fs.readdirSync(controllersPath).map(function(item) {
      var name = item.slice(0, -3); // Remove extension
      return 'index.' + name + " = require('./" + CONTROLLERS_FOLDER + '/' + name + "');\n";
    }).join('') +
    '\nmodule.exports = index;\n';

  fs.writeFileSync(indexPath, indexContent, 'utf8');
}

function removeModels(modelsPath, controllersPath) {
  console.log('Remove models');
  // remove models files
  rimraf.sync(modelsPath);

  // Remove uses in controllers
  replace({
    regex: /\n.*parsed = new .*\(parsed\);/g,
    replacement: '',
    paths: [controllersPath],
    recursive: true,
    silent: true,
  });
}

function removeAPIMATICHeaders(libPath) {
  console.log('Remove APIMATIC Headers');
  // The purpose is to avoid useless diff on files
  replace({
    regex: /.*This file was automatically generated.*/,
    replacement: '',
    paths: [libPath],
    recursive: true,
    silent: true,
  });
}

function addHeadersConfig(configPath, requestClientPath, apiVersion) {
  console.log('Add Headers Config');

  var headers = '' +
    '    headers: {\n' +
    '        "X-Botify-Client": "unknown",\n' +
    '        "accept": "application/json; version=' + apiVersion + '"\n' +
    '    },\n';

  // Add headers in configuration file
  replace({
    regex: /var configuration = {/,
    replacement: 'var configuration = {\n' + headers,
    paths: [configPath],
    recursive: false,
    silent: true,
  });

  var prePend = "var configuration = require('../../configuration');\n";
  var postPend = '\n' +
    '    Object.keys(configuration.headers).forEach(function (key) {\n' +
    '        req.headers[key] = configuration.headers[key];\n' +
    '    });\n';

  // Use headers config while sending requests
  replace({
    regex: /var convertHttpRequest = function \(req\) {/,
    replacement: prePend + 'var convertHttpRequest = function (req) {' + postPend,
    paths: [requestClientPath],
    recursive: false,
    silent: true,
  });
}


function extractAPIMATICArchive(libPath, archiveUrl, cb) {
  console.log('Clearing lib folder');
  rimraf.sync(libPath);
  var packageJson = fs.readJsonSync(PACKAGE_JSON_PATH);

  request
    .get(archiveUrl)
    .pipe(unzip.Parse()) // eslint-disable-line new-cap
    .on('entry', function(entry) {
      var fileName = entry.path;
      if (fileName.indexOf(ARCHIVE_LIB_FOLDER) === 0) {
        // Update lib
        fileName = fileName.slice((ARCHIVE_LIB_FOLDER + '/').length);
        fileName = path.join(libPath, fileName);
        console.log('Copy ' + fileName);
        return entry.pipe(fs.createOutputStream(fileName));
      }
      if (fileName.indexOf(ARCHIVE_PACKAGE_JSON) === 0) {
        // Update package JSON
        entry.pipe(through.obj(function(contents) {
          var jsonData = JSON.parse(contents);
          packageJson.dependencies = jsonData.dependencies;
          console.log('Update lib version to ' + packageJson.version);
          fs.writeJsonSync(PACKAGE_JSON_PATH, packageJson, {spaces: 2});
        }));
      }
      // Dispose entry memory
      entry.autodrain();
    })
    .on('close', cb);
}

function postProcessFetchedArchive(archiveUrl, libPath, apiVersion, cb) {
  var controllersPath = path.join(libPath, CONTROLLERS_FOLDER);
  var modelsPath = path.join(libPath, 'Models');
  var indexPath = path.join(libPath, 'index.js');
  var configPath = path.join(libPath, 'configuration.js');
  var requestClientPath = path.join(libPath, 'Http/Client/RequestClient.js');

  extractAPIMATICArchive(libPath, archiveUrl, function() {
    generateIndex(indexPath, controllersPath);
    removeModels(modelsPath, controllersPath);
    removeAPIMATICHeaders(libPath);
    addHeadersConfig(configPath, requestClientPath, apiVersion);
    cb();
  });
}

module.exports = postProcessFetchedArchive;
