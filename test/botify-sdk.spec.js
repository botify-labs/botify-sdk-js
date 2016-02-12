import chai from 'chai';
import nock from 'nock';

import BotifySdk, { Query, QueryAggregate, ApiError, ApiResponseError } from '../src';
import * as BotifySdkMiddlewares from 'botify-sdk-middlewares';


describe('Index', () => {
  it('must export model classes', () => {
    chai.expect(Query).to.be.equal(BotifySdkMiddlewares.Query);
    chai.expect(QueryAggregate).to.be.equal(BotifySdkMiddlewares.QueryAggregate);
  });

  it('must export error classes', () => {
    chai.expect(ApiError).to.be.equal(BotifySdkMiddlewares.ApiError);
    chai.expect(ApiResponseError).to.be.equal(BotifySdkMiddlewares.ApiResponseError);
  });
});

describe('Auth', () => {
  it('must provide authToken', () => {
    BotifySdk.configuration.authorization = null;

    BotifySdk.authToken('bbbbbbbb');
    chai.expect(BotifySdk.configuration.authorization).to.be.equal('Token bbbbbbbb');
  });
});


describe('Middlewares integration', () => {
  const BASEURI = BotifySdk.configuration.BASEURI;

  it('apiErrorMiddleware: must transform error to ApiError instance', done => {
    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(500, {
        error: {
          message: 'Error 40',
          error_code: '40',
        },
      });

    BotifySdk.AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      chai.expect(error).to.be.instanceOf(ApiError);
      chai.expect(error.status).to.be.equal(500);
      chai.expect(error.message).to.be.equal('ApiError: [500] - error payload');
      chai.expect(error.response).to.deep.equal({
        error: {
          message: 'Error 40',
          error_code: '40',
        },
      });
      done();
    });
  });
});
