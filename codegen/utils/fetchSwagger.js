/* eslint no-var: 0, vars-on-top: 0, no-console: 0 */

var fs = require('fs-extra');
var request = require('superagent');
var path = require('path');
const execSync = require('child_process').execSync;

var KEYS_FILE_PATH = path.join(__dirname, '../botify-keys.json');
var keys = fs.readJsonSync(KEYS_FILE_PATH);

function retreiveSwaggerFile(sdk, source, localSwaggerFilePath, targetPath, cb) {
  if (source === 'local') {
    fs.copySync(localSwaggerFilePath, targetPath);
    cb();
    return;
  }

  if (sdk === 'base') {
    var remoteSwagger = keys.swagger[sdk][source];
    if (!remoteSwagger) {
      console.log('Invalid source');
      process.exit(1);
    }
    request
      .get(remoteSwagger.url)
      .set('Authorization', 'Token ' + remoteSwagger.token)
      .end(function(err, res) {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        fs.writeJsonSync(targetPath, res.body);
        cb();
      });
    return;
  }

  if (sdk === 'metrics-tables') {
    var gateway = keys.swagger[sdk][source];
    if (!gateway) {
      console.log('Invalid source');
      process.exit(1);
    }

    console.log('Fetching swaggerFile from API Gateway (gatewayId: ' + gateway.endpointId + ') on stage ' + gateway.stage + ' using aws-cli.');
    const fetchSwaggerCmd = 'aws apigateway get-export --rest-api-id '
      + gateway.endpointId
      + ' --stage-name '
      + gateway.stage
      + ' --region '
      + gateway.region
      + ' --export-type swagger --accepts application/json '
      + targetPath;

    try {
      execSync(fetchSwaggerCmd);
    } catch (error) {
      console.log(error);
      console.log('Are you sure aws-cli is correctly installed, and your aws credentials are correctly configured?');
      process.exit(1);
    }
    cb();
    return;
  }
}

module.exports = retreiveSwaggerFile;
