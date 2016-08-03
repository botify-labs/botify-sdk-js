import chai from 'chai';
import nock from 'nock';
import path from 'path';
import requireAll from 'require-all';

import BotifySdk, { AnalysisController, ApiError } from '../src';


/**
 * Provide basic testing for generated code by APIMATIC
 */


describe('Index', () => {
  it('must export configuration', () => {
    const configuration = require(path.resolve(__dirname, '../src/base/configuration'));
    chai.expect(configuration).to.be.equal(BotifySdk.configuration);
  });

  it('must export every controlers', () => {
    const controllers = requireAll({
      dirname: path.resolve(__dirname, '../src/base/Controllers'),
    });

    const keys = Object.keys(controllers);
    keys.forEach(key => {
      chai.expect(controllers[key]).to.not.be.undefined;
    });
  });
});

describe('Configuration', () => {
  it('must define prod BASEURI', () => {
    chai.expect(BotifySdk.configuration.BASEURI).to.be.equal('https://api.botify.com/v1');
  });

  it('must define headers', () => {
    chai.expect(BotifySdk.configuration.headers['X-Botify-Client']).to.be.equal('unknown');
    chai.expect(BotifySdk.configuration.headers.accept).to.match(/^application\/json; version=/);
  });
});


describe('Controllers', () => {
  const BASEURI = BotifySdk.configuration.BASEURI;

  afterEach(function() {
    nock.cleanAll();
  });

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
    const TOKEN = 'aaaaaaaaaaaaa';
    BotifySdk.configuration.authorization = `Token ${TOKEN}`;

    nock(BASEURI)
      .matchHeader('Authorization', `Token ${TOKEN}`)
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

  it('must use use default configuration headers', done => {
    nock(BASEURI)
      .matchHeader('accept', BotifySdk.configuration.headers.accept)
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

  it('must use use overides configuration headers', done => {
    BotifySdk.configuration.headers['X-Botify-Client'] = 'chrome-extension';
    nock(BASEURI)
      .matchHeader('X-Botify-Client', 'chrome-extension')
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

    AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      done(error);
    });
  });

  it('must encode query parameters', done => {
    const queryParam = ['http://google.com'];

    nock(BASEURI, { encodedQueryParams: true }) // Disable nock encoding
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis/urls/test')
      .query({
        fields: encodeURIComponent(queryParam),
      })
      .reply(200, {});

    AnalysisController.getUrlDetail({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      url: 'test',
      fields: queryParam,
    }, (error, result) => {
      done(error);
    });
  });

  it('must join csv collection query parameters by commas', done => {
    const fields = ['foo', 'bar'];

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis/urls/test')
      .query({
        fields: fields.join(','),
      })
      .reply(200, {});

    AnalysisController.getUrlDetail({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      area: 'current',
      url: 'test',
      fields,
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
      })
      .reply(200, {});

    AnalysisController.getUrlDetail({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      url: 'http://google.com',
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

  it('must return an ApiError with status and response when API returns an 4xx status code', done => {
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
      chai.expect(error).to.be.instanceof(ApiError);
      chai.expect(error).to.deep.equal({
        status: 404,
        response,
        meta: {},
      });
      chai.expect(result).to.be.undefined;
      done();
    });
  });

  it('must return an ApiError with status and response when API when API returns a 500 status code', done => {
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
      chai.expect(error).to.be.instanceof(ApiError);
      chai.expect(error).to.deep.equal({
        status: 500,
        response,
        meta: {},
      });
      chai.expect(result).to.be.undefined;
      done();
    });
  });
});
