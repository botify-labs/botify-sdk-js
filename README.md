# botify-sdk

[![NPM Version](https://img.shields.io/npm/v/botify-sdk.svg?style=flat)](https://www.npmjs.com/package/botify-sdk)
[![Build Status](https://travis-ci.org/botify-labs/botify-sdk-js.svg?branch=master)](https://travis-ci.org/botify-labs/botify-sdk-js)

This package contains the Javascript SDK for Botify API.


## Installation
```SH
npm install --save botify-sdk
```

### UMD bundle
An UMD bundle is available in `dist/botify-sdk.min.js`. It means you can use the lib with any module loader, including Browserify and RequireJS.
It exposes the global variable `BotifySDK`.

```HTML
<script src="/node_modules/botify-sdk/dist/botify-sdk.min.js"></script>
```


## Authentication
```JS
BotifySDK.authToken(token);
```

## Request API
The SDK exposes a function for each REST API endpoint (operation). They comply with the following signature.
```JS
BotifySDK.Controller.operation(params, callback);
```
- `params` are documented either in the API documentation or in the SDK code.
- `callback` are [NodeJS compliant callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/).

### Example
```JS
BotifySDK.AnalysisController.getAnalysisSummary({
    username: 'foo',
    projectSlug: 'bar',
    analysisSlug: 'koo',
}, function(error, result) {
  // Handle error/result
});
```

### `getUrlsAggs`
SDK exposes `Query` and `QueryAggregate` models that can be used as input for `Analysis.getUrlsAggs` to make this complex endpoint a lot easier to deal with. [More information](https://github.com/botify-labs/botify-sdk-js-middlewares/blob/master/docs/middlewares/queryMiddleware.md)


## Optimization
Middlewares are avalaible in the package [botify-sdk-middlewares](https://github.com/botify-labs/botify-sdk-js-middlewares). Consider using them for optimization and rate limit leverage. Some have been included by default in this package.
