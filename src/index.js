import baseSdk from './gen-sdk';
import {
  applyMiddleware,
  apiErrorMiddleware,
  dedupleMiddleware,
  getUrlDetailEncodeMiddleware,
  queryMiddleware,
  Query,
  QueryAggregate,
  ApiError,
  ApiResponseError,
} from 'botify-sdk-middlewares';


/** Apply default middlewares **/

const sdk = applyMiddleware(
  apiErrorMiddleware,
  getUrlDetailEncodeMiddleware,
  queryMiddleware(),
  dedupleMiddleware,
)(baseSdk);


sdk.authToken = function authToken(token) {
  sdk.configuration.authorization = `Token ${token}`;
};

sdk.Query = Query;
sdk.QueryAggregate = QueryAggregate;
sdk.ApiError = ApiError;
sdk.ApiResponseError = ApiResponseError;
export default sdk;
