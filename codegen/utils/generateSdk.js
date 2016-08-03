/* eslint no-var: 0, vars-on-top: 0, no-console: 0 */

var fs = require('fs-extra');
var request = require('superagent');

var path = require('path');
var KEYS_FILE_PATH = path.join(__dirname, '../botify-keys.json');
var keys = fs.readJsonSync(KEYS_FILE_PATH);

function generateSdk(swaggerFilePath, sdkName, cb) {
  console.log('Generating SDK');
  request
    .post(keys.apimatic.url)
    .auth(keys.apimatic.username, keys.apimatic.password)
    .query({
      name: sdkName,
      format: 'Swagger',
      template: 'node_javascript_lib',
    })
    .send(fs.readJsonSync(swaggerFilePath))
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

module.exports = generateSdk;
