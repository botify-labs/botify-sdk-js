/**
 * BotifyAPILib
 *
 * This file was automatically generated for Botify by APIMATIC BETA v2.0 on 02/12/2016
 */

var request = require('../Http/Client/RequestClient'),
    configuration = require('../configuration'),
    APIHelper = require('../APIHelper');

var AnalysisController = {

    /**
     * List all active analyses for a project
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {Analysis}
     */
    getAnalyses : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Gets an Analysis detail
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
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
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Return global statistics for an analysis
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getCrawlStatistics : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Return statistics by 1mn, 5mn or 60mn for an analysis
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} frequency    Required parameter: frequency of sampling
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     *     {int|null} limit    Optional parameter: max number of elements to retrieve
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getCrawlStatisticsByFrequency : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/time";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "frequency" : input.frequency,
            "limit" : input.limit
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Return a list of 1000 latest URLs crawled or with errors
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} listType    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
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
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/crawl_statistics/urls/{list_type}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "list_type" : input.listType,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Orphan URLs
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} medium    Required parameter: TODO: type description here
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} source    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getGanalyticsOrphanURLs : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/ganalytics/orphan_urls/{medium}/{source}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "medium" : input.medium,
            "project_slug" : input.projectSlug,
            "source" : input.source,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Links percentiles
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getLinksPercentiles : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/links/percentiles";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Lost pagerank
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getPageRankLost : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/pagerank/lost";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Sitemaps reports
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getSitemapsReport : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/report";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Sitemaps samples: out of config
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getSitemapsSamplesOutOfConfig : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/out_of_config";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Sitemaps samples: only sitemaps
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getSitemapsSamplesSitemapsOnly : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/sitemaps/samples/sitemap_only";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Top domains
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getLinksTopDomains : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/domains";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Top subddomains
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getLinksTopSubdomains : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/features/top_domains/subdomains";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Get list of PDF Exports
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {PdfExportStatus}
     */
    getPDFExports : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/pdf";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Creates a new PDFExport object and starts a task that will generate the file. Returns the model id that manages the task
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {UrlsFilter} urlsFilter    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     *     {string|null} area    Optional parameter: Example: current
     *     {array|null} sections    Optional parameter: Example: overview
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {PdfExportStatus}
     */
    createPdfExport : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/pdf";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "area" : (null != input.area)? input.area: "current",
            "sections" : (null != input.sections)? input.sections: "overview"
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : configuration.authorization
        };

        //Remove null values
        APIHelper.cleanObject(input.urlsFilter);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(input.urlsFilter),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Checks the status of an UrlExport object- - returns json object with the status.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} pdfExportId    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {PdfExportStatus}
     */
    getPdfExportStatus : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/pdf/{pdf_export_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "pdf_export_id" : input.pdfExportId,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Executes a query and returns a paginated response
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {UrlsQuery} urlsQuery    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     *     {string|null} area    Optional parameter: Example: current
     *     {int|null} page    Optional parameter: Page Number
     *     {int|null} size    Optional parameter: Page Size
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {UrlsQuery}
     */
    getUrls : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "area" : (null != input.area)? input.area: "current",
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : configuration.authorization
        };

        //Remove null values
        APIHelper.cleanObject(input.urlsQuery);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(input.urlsQuery),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Query aggregator. It accepts multiple queries
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {array} urlsAggsQueries    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
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
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/aggs";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "area" : (null != input.area)? input.area: "current"
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : configuration.authorization
        };

        //Remove null values
        APIHelper.cleanObject(input.urlsAggsQueries);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(input.urlsAggsQueries),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Gets an Analysis datamodel
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     *     {string|null} area    Optional parameter: Example: current
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {mixed}
     */
    getUrlsDatamodel : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/datamodel";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "area" : (null != input.area)? input.area: "current"
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Get list of Exported Urls
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {int} page    Required parameter: Page Number
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {int} size    Required parameter: Page Size
     *     {string} username    Required parameter: TODO: type description here
     * 
     * @param {object} input    RequiredParameter: object containing any of the parameters to this API Endpoint.
     * @param {function} callback    Required parameter: Callback function in the form of function(error, response)
     *
     * @return {CsvExportStatus}
     */
    getUrlsExports : function(input, callback){
        //Assign default values
        input = input || {};

        //prepare query string for API call;
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "page" : input.page,
            "size" : input.size
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Creates a new UrlExport object and starts a task that will export the results into a csv. Returns the model id that manages the task
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {UrlsQuery} urlsQuery    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
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
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "area" : (null != input.area)? input.area: "current"
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "content-type" : "application/json; charset=utf-8",
            "Authorization" : configuration.authorization
        };

        //Remove null values
        APIHelper.cleanObject(input.urlsQuery);

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "POST",
            headers: headers,
            body : APIHelper.jsonSerialize(input.urlsQuery),
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Checks the status of an CSVUrlExportJob object- - returns json object with the status.
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} urlExportId    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
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
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/export/{url_export_id}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "url_export_id" : input.urlExportId,
            "username" : input.username
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    },


    /**
     * Gets the detail of an URL for an analysis
     * All parameters to the endpoint are supplied through the object with their names
     * being the key and their desired values being the value. A list of parameters that can be used are:
     * 
     *     {string} analysisSlug    Required parameter: TODO: type description here
     *     {string} projectSlug    Required parameter: TODO: type description here
     *     {string} url    Required parameter: TODO: type description here
     *     {string} username    Required parameter: TODO: type description here
     *     {string|null} area    Optional parameter: Example: current
     *     {array|null} fields    Optional parameter: TODO: type description here
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
        var baseUri = configuration.BASEURI;
        
        var queryBuilder = baseUri + "/analyses/{username}/{project_slug}/{analysis_slug}/urls/{url}";
        
        //Process template parameters
        queryBuilder = APIHelper.appendUrlWithTemplateParameters(queryBuilder, {
            "analysis_slug" : input.analysisSlug,
            "project_slug" : input.projectSlug,
            "url" : input.url,
            "username" : input.username
        });

        //Process query parameters
        queryBuilder = APIHelper.appendUrlWithQueryParameters(queryBuilder, {
            "area" : (null != input.area)? input.area: "current",
            "fields" : input.fields
        });

        //validate and preprocess url
        var queryUrl = APIHelper.cleanUrl(queryBuilder);
        
        //prepare headers
        var headers = {
            "accept" : "application/json",
            "Authorization" : configuration.authorization
        };

        //Construct the request
        var options = {
            queryUrl: queryUrl,
            method: "GET",
            headers: headers,
        };
        
        //Build the response processing. 
        function cb(error, response, context) {
            if(error){
                callback({errorMessage: error.message, errorCode: error.code},null,context);
            }else if (response.statusCode >= 200 && response.statusCode <= 206) {
                callback(null,JSON.parse(response.body),context);
            }else{
                //Error handling using HTTP status codes
                if (response.statusCode == 500) {
                    callback({errorMessage: "error payload", errorCode: 500, errorResponse:response.body},null,context);
                } else {
                    callback({errorMessage: "HTTP Response Not OK", errorCode: response.statusCode, errorResponse:response.body},null,context);
                }
            }
        }
        request(options, cb);
        
    }

};

module.exports = AnalysisController;