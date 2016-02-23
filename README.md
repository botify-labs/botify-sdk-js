# botify-sdk

[![NPM Version](https://img.shields.io/npm/v/botify-sdk.svg?style=flat)](https://www.npmjs.com/package/botify-sdk)
[![Build Status](https://travis-ci.org/botify-labs/botify-sdk-js.svg?branch=master)](https://travis-ci.org/botify-labs/botify-sdk-js)

This package contains the Javascript SDK for Botify API.
API documentation can be found at [https://developers.botify.com/api/](https://developers.botify.com/api/).

**SDK Demo:** [link](https://jsfiddle.net/8k20pbua/11/ )


## Installation

### Node.js, Webpack, Browserify
```SH
npm install --save botify-sdk@1.0.0-beta4
```
```JS
var BotifySDK = require('botify-sdk');

BotifySDK.authToken(token);
BotifySDK.AnalysisController.getAnalysisSummary({
  username: 'foo',
  projectSlug: 'bar',
  analysisSlug: 'koo',
}, function (err, response) {
  // Handle response
});
```

### Vanilla javascript
```HTML
<script src="https://cdn.jsdelivr.net/botify/1.0.0-beta4/botify-sdk.min.js"></script>
<script>
  BotifySDK.authToken(token);
  BotifySDK.AnalysisController.getAnalysisSummary({
    username: 'foo',
    projectSlug: 'bar',
    analysisSlug: 'koo',
  }, function (err, response) {
    // Handle response
  });
</script>
```

### Require.JS (AMD)
```HTML
<script src="https://cdn.jsdelivr.net/botify/1.0.0-beta4/botify-sdk.min.js"></script>
<script>
  define(["BotifySDK"], function(BotifySDK) {
    BotifySDK.authToken(token);
    BotifySDK.AnalysisController.getAnalysisSummary({
      username: 'foo',
      projectSlug: 'bar',
      analysisSlug: 'koo',
    }, function (err, response) {
      // Handle response
    });
  });
</script>
```
**Note:** If you'd like to host the lib yourself, the bundle is available at `dist/botify-sdk.min.js` in the npm module.


## Usage

### Authentication
```JS
BotifySDK.authToken(token);
```
**How to get your token:** [https://developers.botify.com/api/authentication/](https://developers.botify.com/api/authentication/)

### Request API
The SDK exposes a function for each operation. They comply with the following signature:
```JS
BotifySDK.Controller.operation(params, callback);
```
- `params` (object): params are documented both in the SDK code or in the API documentation (becareful that in the JS SDK params are **camelcased**).
- `callback` (function): [NodeJS compliant callback](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/).

Full list of operations at [https://developers.botify.com/api/reference](https://developers.botify.com/api/reference)


### Example
```JS
BotifySDK.AnalysisController.getAnalysisSummary({
  username: 'foo',
  projectSlug: 'bar',
  analysisSlug: 'koo',
}, function(error, result) {
  // Handle response
});
```

### getUrlsAggs
SDK exposes `Query` and `QueryAggregate` models that can be used as input for `Analysis.getUrlsAggs` to make this complex endpoint a lot easier to deal with. [More information](https://github.com/botify-labs/botify-sdk-js-middlewares/blob/master/docs/middlewares/queryMiddleware.md)

Example of Query usage in the [demo](https://jsfiddle.net/8k20pbua/11/)


## Optimization
Middlewares are avalaible in the package [botify-sdk-middlewares](https://github.com/botify-labs/botify-sdk-js-middlewares). Consider using them for optimization and rate limit leverage. Some have been included by default in this package.
