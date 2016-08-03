#!/usr/bin/env node


/* eslint no-var: 0, vars-on-top: 0, new-cap: 0, no-console: 0 */
var path = require('path');
var argv = require('yargs')
  .usage('Usage: $0 -s [source]')
  .option('s', {
    alias: 'source',
    demand: true,
    default: 'production',
    describe: 'Swagger file source. Can be "production", "staging", "sandboxX" or "local"',
    type: 'string',
    nargs: 1,
  })
  .option('f', {
    alias: 'file',
    demand: false,
    describe: 'Local swagger filepath',
    type: 'string',
    nargs: 1,
  })
  .help('h')
  .alias('h', 'help')
  .argv;

var SWAGGER_FILE_PATH = path.join(__dirname, '../swagger.json');
var LIB_PATH = path.join(__dirname, '../src/base');

var retreiveSwaggerFile = require('./utils/fetchSwagger');
var generateSdk = require('./utils/generateSdk');
var postProcessGenerated = require('./utils/processSdk');
var preProcessSwagger = require('./utils/preProcessSwagger');

retreiveSwaggerFile('base', argv.s, argv.f, SWAGGER_FILE_PATH, function() {
  var apiVersion = preProcessSwagger(SWAGGER_FILE_PATH, function(swaggerFile) {
    swaggerFile.schemes = ['https'];
    swaggerFile.host = 'api.botify.com';
    return swaggerFile;
  });
  generateSdk(SWAGGER_FILE_PATH, 'botify-sdk-js', function(archiveUrl) {
    postProcessGenerated(archiveUrl, LIB_PATH, apiVersion, function() {
      process.exit(0);
    });
  });
});
