/* eslint no-var: 0, vars-on-top: 0, no-console: 0 */

var fs = require('fs-extra');
var path = require('path');
var CODEGEN_SETTINGS_FILE_PATH = path.join(__dirname, '../codegenSettings.json');

function prepareSwaggerFile(swaggerFilePath, processingAction) {
  var swaggerFile = fs.readJsonSync(swaggerFilePath);
  var codegenSettings = fs.readJsonSync(CODEGEN_SETTINGS_FILE_PATH);

  // Add codegen settings
  console.log('Save swagger file with codegen settings at ' + swaggerFilePath);
  swaggerFile.info['x-codegen-settings'] = codegenSettings;

  if (processingAction) {
    console.log('Pre-processing Swagger file...');
    swaggerFile = processingAction(swaggerFile);
  }

  fs.writeJsonSync(swaggerFilePath, swaggerFile, {spaces: 2});

  return swaggerFile.info.version;
}

module.exports = prepareSwaggerFile;
