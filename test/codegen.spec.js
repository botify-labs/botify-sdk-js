import chai from 'chai';
import nock from 'nock';
import path from 'path';
import requireAll from 'require-all';

import BotifySdk, { ApiError } from '../src';


/**
 * Provide basic testing for generated code by APIMATIC
 */


describe('Codegen Index', () => {
  it('must export configuration', () => {
    const configuration = require(path.resolve(__dirname, '../src/gen-sdk/configuration'));
    chai.expect(configuration).to.be.equal(BotifySdk.configuration);
  });

  it('must export every controllers', () => {
    const controllers = requireAll({
      dirname: path.resolve(__dirname, '../src/gen-sdk/Controllers'),
    });

    const keys = Object.keys(controllers);
    keys.forEach(key => {
      chai.expect(BotifySdk[key]).to.not.be.undefined;
    });
  });
});

describe('Configuration', () => {
  it('must define prod BASE_URI', () => {
    chai.expect(BotifySdk.configuration.BASEURI).to.be.equal('https://api.botify.com/v1');
  });
});


describe('Controllers', () => {
  const BASEURI = BotifySdk.configuration.BASEURI;

  it('must use setup BASEURI', done => {
    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(200, {});

    BotifySdk.AnalysisController.getAnalysisSummary({
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

    nock(BASEURI, {
      reqheaders: {
        Authorization: `Token ${TOKEN}`,
      }})
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(200, {});

    BotifySdk.AnalysisController.getAnalysisSummary({
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

    BotifySdk.AnalysisController.getAnalysisSummary({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
    }, (error, result) => {
      done(error);
    });
  });

  it('must encode query parameters', done => {
    const sections = ['a', 'b', 'c'];

    nock(BASEURI, { encodedQueryParams: true }) // Disable nock encoding
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .post('/analyses/user/project/analysis/pdf')
      .query({
        sections: encodeURIComponent(sections),
        area: 'current',
      })
      .reply(200, {});

    BotifySdk.AnalysisController.createPdfExport({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      area: 'current',
      sections,
    }, (error, result) => {
      done(error);
    });
  });

  it('must join csv collection query parameters by commas', done => {
    const fields = ['foo', 'bar'];
    const url = 'http://google.com';

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis/urls/' + encodeURIComponent(url))
      .query({
        fields: fields.join(','),
        area: 'current',
      })
      .reply(200, {});

    BotifySdk.AnalysisController.getUrlDetail({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      url,
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

    BotifySdk.AnalysisController.getUrls({
      username: 'user',
      projectSlug: 'project',
      analysisSlug: 'analysis',
      area: 'current',
      urlsQuery,
    }, (error, result) => {
      done(error);
    });
  });

  it('must return response given by the API', done => {
    const response = { a: 'a', b: []};

    nock(BASEURI)
      .defaultReplyHeaders({
        'Content-Type': 'application/json',
      })
      .get('/analyses/user/project/analysis')
      .reply(200, JSON.stringify(response));

    BotifySdk.AnalysisController.getAnalysisSummary({
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

    BotifySdk.AnalysisController.getAnalysisSummary({
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

    BotifySdk.AnalysisController.getAnalysisSummary({
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
      done();
    });
  });
});
