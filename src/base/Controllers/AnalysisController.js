/**
 * BotifyAPILib
 *

 */

var _request = require('../Http/Client/RequestClient'),
    _configuration = require('../configuration'),
    _APIHelper = require('../APIHelper');

var AnalysisController = {

    /**
     * Get an Analysis detail
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {AnalysisDetail}
     */
    getAnalysisSummary : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Return global statistics for an analysis
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CrawlStatistics}
     */
    getCrawlStatistics : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Return crawl statistics grouped by time frequency (1 min, 5 mins or 60 min)
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} frequency    Required parameter: Aggregation frequency
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {int|null} limit    Optional parameter: max number of elements to retrieve
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CrawlStatisticsTime}
     */
    getCrawlStatisticsByFrequency : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "frequency" : input.frequency,
            "limit" : input.limit
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Return a list of 1000 latest URLs crawled (all crawled URLs or only URLS with HTTP errors)
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {ListType} listType    Required parameter: URLs list type (crawled URLs or error URLs)
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getCrawlStatisticsUrls : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug,
            "list_type" : (input.listType != null)?input.listType:null
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * List of Orphan URLs
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int} page    Required parameter: Page Number
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {Medium} medium    Required parameter: Type of traffic, value: 'organic' (from search engine)or 'social' (from a social network)
     *     {string} source    Required parameter: Traffic source, value: name of the search engine or social network
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetGanalyticsOrphanURLsResponse}
     */
    getGanalyticsOrphanURLs : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug,
            "medium" : (input.medium != null)?input.medium:null,
            "source" : input.source
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get inlinks percentiles
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {LinksPercentiles}
     */
    getLinksPercentiles : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Lost pagerank
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {PageRankLost}
     */
    getPageRankLost : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Get global information of the sitemaps found (sitemaps indexes, invalid sitemaps urls, etc
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {SitemapsReport}
     */
    getSitemapsReport : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Sample list of URLs which were found in your sitemaps but outside of the
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int} page    Required parameter: Page Number
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetSitemapsSamplesOutOfConfigResponse}
     */
    getSitemapsSamplesOutOfConfig : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Sample list of URLs which were found in your sitemaps, within the project
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int} page    Required parameter: Page Number
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetSitemapsSamplesSitemapsOnlyResponse}
     */
    getSitemapsSamplesSitemapsOnly : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Top domains
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int} page    Required parameter: Page Number
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetLinksTopDomainsResponse}
     */
    getLinksTopDomains : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Top subddomains
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int} page    Required parameter: Page Number
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetLinksTopSubdomainsResponse}
     */
    getLinksTopSubdomains : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Executes a query and returns a paginated response
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {UrlsQuery} urlsQuery    Required parameter: Example: 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {string|null} area    Optional parameter: Analysis context to execute the query
     *     {int|null} page    Optional parameter: Page Number
     *     {int|null} size    Optional parameter: Page Size
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetUrlsResponse}
     */
    getUrls : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "area" : (null != input.area)? input.area: "current",
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : _configuration.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.urlsQuery);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.urlsQuery),
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Query aggregator
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {array} urlsAggsQueries    Required parameter: Example: 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {string|null} area    Optional parameter: Example: current
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getUrlsAggs : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "area" : (null != input.area)? input.area: "current"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : _configuration.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.urlsAggsQueries);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.urlsAggsQueries),
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Gets an Analysis datamodel
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {string|null} area    Optional parameter: Example: current
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CrawlDatamodel}
     */
    getUrlsDatamodel : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "area" : (null != input.area)? input.area: "current"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * A list of the CSV Exports requests and their current status
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int} page    Required parameter: Page Number
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {GetUrlsExportsResponse}
     */
    getUrlsExports : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Creates a new UrlExport object and starts a task that will export the results into a csv
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {UrlsQuery} urlsQuery    Required parameter: Example: 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {string|null} area    Optional parameter: Example: current
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CsvExportStatus}
     */
    createUrlsExport : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "area" : (null != input.area)? input.area: "current"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : _configuration.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.urlsQuery);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.urlsQuery),
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Checks the status of an CSVUrlExportJob object
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {string} urlExportId    Required parameter: Url Export ID
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CsvExportStatus}
     */
    getUrlsExportStatus : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug,
            "url_export_id" : input.urlExportId
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Return most frequent segments (= suggested patterns in the previous version)
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {UrlsAggsQuery} urlsAggsQuery    Required parameter: Example: 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {string|null} area    Optional parameter: Example: current
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UrlsAggsQuery}
     */
    getUrlsSuggestedFilters : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/suggested_filters";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "area" : (null != input.area)? input.area: "current"
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : _configuration.authorization
        };

        //Remove null values
        _APIHelper.cleanObject(input.urlsAggsQuery);

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "POST",
            headers: _headers,
            body : _APIHelper.jsonSerialize(input.urlsAggsQuery),
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    },


    /**
     * Gets the detail of an URL for an analysis
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} username    Required parameter: User's identifier
     *     {string} projectSlug    Required parameter: Project's identifier
     *     {string} analysisSlug    Required parameter: Analysis' identifier
     *     {string} url    Required parameter: (Urlencoded) Searched URL
     *     {array|null} fields    Optional parameter: comma separated list of fields to return (c.f. URLs Datamodel)
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getUrlDetail : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var _baseUri = _configuration.BASEURI;
        
        var _queryBuilder = _baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}";
        
        //Process template parameters
        _queryBuilder = _APIHelper.appendUrlWithTemplateParameters(_queryBuilder, {
            "username" : input.username,
            "project_slug" : input.projectSlug,
            "analysis_slug" : input.analysisSlug,
            "url" : input.url
        });

        //Process query parameters
        _queryBuilder = _APIHelper.appendUrlWithQueryParameters(_queryBuilder, {
            "fields" : input.fields
        });

        //validate and preprocess url
        var _queryUrl = _APIHelper.cleanUrl(_queryBuilder);
        
        //prepare headers
        var _headers = {
            "accept" : "application/json",
            "Authorization" : _configuration.authorization
        };

        //Construct the request
        var _options = {
            queryUrl: _queryUrl,
            method: "GET",
            headers: _headers,
        };
        
        //Build the response processing. 
        function cb(_error, _response, _context) {
            if(_error) {
                callback({errorMessage: _error.message, errorCode: _error.code},null,_context);
            } else if (_response.statusCode >= 200 && _response.statusCode <= 206) {
                var parsed = JSON.parse(_response.body);
                callback(null,parsed,_context);
            } else if (_response.statusCode == 500) {
                callback({errorMessage: "error payload", errorCode: 500, errorResponse:_response.body},null,_context);
            } else {
                callback({errorMessage: "HTTP Response Not OK", errorCode: _response.statusCode, errorResponse:_response.body},null,_context);
            }
        }
        _request(_options, cb);
    }

};

module.exports = AnalysisController;