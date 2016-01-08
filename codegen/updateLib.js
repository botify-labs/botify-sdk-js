#!/usr/bin/env node

// Usage
// $ updateLib <swaggerFilePath>
//    swaggerFilePath (optional): Path to swagger file. Otherwise use the production one.


/* eslint no-var: 0, vars-on-top: 0, new-cap: 0, no-console: 0 */
var fs = require('fs-extra');
var path = require('path');
var rimraf = require('rimraf');
var unzip = require('unzip');
var through = require('through2');
var request = require('superagent');


var KEYS_FILE_PATH = path.join(__dirname, './botify-keys.json');
var CODEGEN_SETTINGS_FILE_PATH = path.join(__dirname, './codegenSettings.json');
var SWAGGER_FILE_PATH = path.join(__dirname, '../swagger.json');
var PACKAGE_JSON_PATH = path.join(__dirname, '../package.json');
var LIB_PATH = path.join(__dirname, '../lib');

var ARCHIVE_LIB_FOLDER = 'botifyapilib/lib';
var ARCHIVE_PACKAGE_JSON = 'botifyapilib/package.json';


var keys = fs.readJsonSync(KEYS_FILE_PATH);
var packageJson = fs.readJsonSync(PACKAGE_JSON_PATH);
var baseSwaggerFilePath = process.argv[2];


function retreiveSwaggerFile(cb) {
  if (baseSwaggerFilePath) {
    console.log('Use given swagger file');
    fs.copySync(baseSwaggerFilePath, SWAGGER_FILE_PATH);
    cb();
  } else {
    console.log('Fetching swaggerFile from production');
    request
      .get(keys.swagger.url)
      .set('Authorization', 'Token ' + keys.swagger.token)
      .end(function(err, res) {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        fs.writeJsonSync(SWAGGER_FILE_PATH, res.body);
        cb();
      });
  }
}

function addCodegenSettings() {
  var swaggerFile = fs.readJsonSync(SWAGGER_FILE_PATH);
  var codegenSettings = fs.readJsonSync(CODEGEN_SETTINGS_FILE_PATH);

  console.log('Save swagger file with codegen settings at ' + SWAGGER_FILE_PATH);
  swaggerFile.info['x-codegen-settings'] = codegenSettings;
  fs.writeJsonSync(SWAGGER_FILE_PATH, swaggerFile, {spaces: 2});
}

function generateSdk(cb) {
  console.log('Generating SDK');
  request
    .post(keys.apimatic.url)
    .auth(keys.apimatic.username, keys.apimatic.password)
    .query({
      name: 'botify-sdk-js',
      format: 'Swagger',
      template: 'node_javascript_lib',
    })
    .send(fs.readJsonSync(SWAGGER_FILE_PATH))
    .end(function(err, res) {
      if (err) {
        console.log(err);
        process.exit(1);
      }
      var archiveUrl = keys.apimatic.archiveBaseUrl + res.text;
      console.log('Lib archive available at ' + archiveUrl);
      cb(archiveUrl);
    });
}

function extractAPIMATICArchive(archiveUrl, cb) {
  console.log('Clearing lib folder');
  rimraf.sync(LIB_PATH);

  request
    .get(archiveUrl)
    .pipe(unzip.Parse())
    .on('entry', function(entry) {
      var fileName = entry.path;
      if (fileName.indexOf(ARCHIVE_LIB_FOLDER) === 0) {
        // Update lib
        fileName = fileName.slice((ARCHIVE_LIB_FOLDER + '/').length);
        fileName = path.join(LIB_PATH, fileName);
        console.log('Copy ' + fileName);
        return entry.pipe(fs.createOutputStream(fileName));
      }
      if (fileName.indexOf(ARCHIVE_PACKAGE_JSON) === 0) {
        // Update package JSON
        entry.pipe(through.obj(function(contents) {
          var jsonData = JSON.parse(contents);
          packageJson.version = jsonData.version;
          packageJson.dependencies = jsonData.dependencies;
          console.log('Update lib version to ' + packageJson.version);
          fs.writeJsonSync(PACKAGE_JSON_PATH, packageJson, {spaces: 2});
        }));
      }
      // Dispose entry memory
      entry.autodrain();
    });
}


retreiveSwaggerFile(function() {
  addCodegenSettings();
  generateSdk(function(archiveUrl) {
    extractAPIMATICArchive(archiveUrl, function() {
      process.exit(0);
    });
  });
});
