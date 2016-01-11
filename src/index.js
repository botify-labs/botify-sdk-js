import baseSdk from './gen-sdk';
import {
  applyMiddleware,
  apiErrorMiddleware,
  dedupleMiddleware,
  getUrlDetailEncodeMiddleware,
  jobsMiddleware,
  queryMiddleware,
  Query,
  QueryAggregate,
  ApiError,
  ApiResponseError,
} from 'botify-sdk-js-middlewares';


/** Apply default middlewares **/

const sdk = applyMiddleware(
  apiErrorMiddleware,
  getUrlDetailEncodeMiddleware,
  queryMiddleware(),
  dedupleMiddleware,
  jobsMiddleware(),
)(sdk);


sdk.authToken = function authToken(token) {
  baseSdk.configuration.authorization = `Token ${token}`;
};

export default sdk;
export {
  Query,
  QueryAggregate,
  ApiError,
  ApiResponseError,
};
