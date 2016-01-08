import baseSdk from '../lib';
import {
  applyMiddleware,
  apiErrorMiddleware,
  dedupleMiddleware,
  getUrlDetailEncodeMiddleware,
  queryMiddleware,
} from 'botify-sdk-js-middlewares';


/** Apply default middlewares **/

const sdk = applyMiddleware(
  apiErrorMiddleware,
  getUrlDetailEncodeMiddleware,
  queryMiddleware(),
  dedupleMiddleware,
)(sdk);


sdk.init = function init(token) {
  baseSdk.configuration.authorization = `Token ${token}`;
};

export default sdk;
