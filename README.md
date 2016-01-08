Botify JS SDK
=================
This package contains the Javascript SDK for Botify API.


## Installation
```SH
npm install --save botify-sdk-js
```

## Usage
The following shows how import the controllers and use:

1) Import the module:
```JS
import botifySdk from 'botify-sdk-js';
```

2) Configure any authentication parameters. For example:
```JS
botifySdk.configuration.authorization = `Token ${token}`;
```

3) Access various controllers by:
```JS
botifySdk.AnalysisController.getAnalysisSummary({
    username: 'foo',
    projectSlug: 'bar',
    analysisSlug: 'koo',
}, callback);
```

### UMD bundle
An UMD bundle is available in `dist/botify-sdk-js.min.js`. It exposes the global variable `BotifySdkJs`.

```HTML
<script type="text/javascript" src="node_modules/botify-sdk-js/dist/botify-sdk-js.min.js"></script>
```
```JS
BotifySdkJs.AnalysisController.getAnalysisSummary(params, callback);
```

## Optimizations
Middlewares are avalaible in the package [botify-sdk-js-middlewares](https://github.com/botify-labs/botify-sdk-js-middlewares). Consider using them for optimization and rate limit leverage.
