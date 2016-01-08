import chai from 'chai';
import nock from 'nock';
import path from 'path';
import requireAll from 'require-all';

import BotifySdk, { AnalysisController } from '../lib';


/**
 * Provide basic testing for generated code by APIMATIC
 */


describe('Index', () => {
  it('must export configuration', () => {
    const configuration = require(path.resolve(__dirname, '../lib/configuration'));
    chai.expect(configuration).to.be.equal(BotifySdk.configuration);
  });

  it('must export every controlers', () => {
    const controllers = requireAll({
      dirname: path.resolve(__dirname, '../lib/Controllers'),
    });

    const keys = Object.keys(controllers);
    keys.forEach(key => {
      chai.expect(controllers[key]).to.be.equal(BotifySdk[key]);
    });
  });
});


describe('Controllers', () => {
  const BASEURI = 'http://api.example.com/v1';
  const TOKEN = 'aaaaaaaaaaaaa';

  BotifySdk.configuration.BASEURI = BASEURI;
  BotifySdk.configuration.authorization = `Token ${TOKEN}`;

  it('must use setup BASEURI', done => {
    // @TODO use an operation that doesn't have path parameters
    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(200, {});

    AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      done(error);
    });
  });

  it('must use setup Token', done => {
    nock(BASEURI, {
      reqheaders: {
        Authorization: `Token ${TOKEN}`,
      }})
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(200, {});

    AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      done(error);
    });
  });

  it('must throw error when requiered parameter is missing');

  it('must replace params in path', done => {
    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(200, {});

    BotifySdk.configuration.authorization = `Token ${TOKEN}`;
    AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      done(error);
    });
  });

  it('must encode query parameters', done => {
    const queryParam = 'http://google.com';

    nock(BASEURI, { encodedQueryParams: true }) // Disable nock encoding
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis/urls/fields/fat/suggest')
      .query({
        value: encodeURIComponent(queryParam),
        area: 'current',
      })
      .reply(200, {});

    AnalysisController.getUrlsFieldSuggest({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      field: 'fat',
      area: 'current',
      value: queryParam,
    }, (error, result) => {
      done(error);
    });
  });

  it('must join csv collection query parameters by commas', done => {
    const insightIdentifiers = ['foo', 'bar'];

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .post('/analyses/user/project/analysis/insights')
      .query({
        insight_identifiers: insightIdentifiers.join(','),
        area: 'current',
        trend_limit: 30,
      })
      .reply(200, {});

    AnalysisController.getInsights({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      area: 'current',
      trendLimit: 30,
      insightIdentifiers,
    }, (error, result) => {
      done(error);
    });
  });

  it('must join csv collection query parameters by commas (2)', done => {
    const fields = ['foo', 'bar'];

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis/urls/http%3A%2F%2Fgoogle.com')
      .query({
        fields: fields.join(','),
        area: 'current',
      })
      .reply(200, {});

    AnalysisController.getUrlDetail({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      url: 'http%3A%2F%2Fgoogle.com',
      area: 'current',
      fields,
    }, (error, result) => {
      done(error);
    });
  });

  it('must clean POST data by deeply removing null and undefined keys', done => {
    let a;
    const urlsQuery = {
      a,
      b: undefined,
      c: null,
      d: false,
      e: 0,
      f: '',
      1: {
        a,
        b: undefined,
        c: null,
        d: false,
        e: 0,
        f: '',
        2: 'foo',
      },
    };

    const expectSent = {
      d: false,
      e: 0,
      f: '',
      1: {
        d: false,
        e: 0,
        f: '',
        2: 'foo',
      },
    };

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .post('/analyses/user/project/analysis/urls', expectSent)
      .query({
        area: 'current',
      })
      .reply(200, {});

    AnalysisController.getUrls({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      area: 'current',
      urlsQuery,
    }, (error, result) => {
      done(error);
    });
  });

  it('must return PARSED data given by the API', done => {
    const response = { a: 'a', b: []};

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(200, JSON.stringify(response));

    AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      chai.expect(error).to.be.null;
      chai.expect(result).to.deep.equal(response);
      done();
    });
  });

  it('must return a payload error with the NOT PARSED response when API returns an 4xx status code', done => {
    const response = {
      error_code: 41,
      message: 'The analysis does not exist',
    };

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(404, JSON.stringify(response));

    AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      chai.expect(error).to.deep.equal({
        errorMessage: 'HTTP Response Not OK',
        errorCode: 404,
        errorResponse: JSON.stringify(response),
      });
      chai.expect(result).to.be.equal(null);
      done();
    });
  });

  it('must return a payload error with the NOT PARSED response when API returns a 500 status code', done => {
    const response = {
      error_code: 41,
      message: 'The analysis does not exist',
    };

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(500, JSON.stringify(response));

    AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      chai.expect(error).to.deep.equal({
        errorMessage: 'error payload',
        errorCode: 500,
        errorResponse: JSON.stringify(response),
      });
      chai.expect(result).to.be.equal(null);
      done();
    });
  });
});
