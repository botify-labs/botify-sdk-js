/**
 * Created by Kartik Andalam on 4/12/15.
 * Copyright (c) 2015 APIMatic. All rights reserved.
 *
 */
var HttpContext = require("./HttpContext");
var HttpResponse = require("../Response/HttpResponse");
var APIHelper = require('../../APIHelper');
var request = require("superagent");
var stream = require('stream');

var convertHttpRequest = function (req) {
    //Convert to superagents's version of http request
    var newRequest = request(req.method, req.queryUrl);

    //Set headers
    newRequest.set(req.headers);

    if (req.username) {
        newRequest.auth(req.username, req.password)
    }
    if (req.body) {
        newRequest.send(req.body);
    }
    if (req.formData) {
        var flattenedList = APIHelper.formDataEncodeObject(req.formData);
        for (var index in flattenedList) {
            var key = flattenedList[index].key
            var value = flattenedList[index].value;
            if (value instanceof stream.Stream) {
                newRequest.attach(key, value)
            } else {
                newRequest.field(key, value)
            }
        }
    }
    if (req.form) {
        newRequest.send(APIHelper.urlEncodeObject(req.form));
        newRequest.set('content-type', 'application/x-www-form-urlencoded');
    }
    return newRequest;
}

var convertHttpResponse = function (resp) {
    var response = new HttpResponse();
    if (resp) {
        response.body = resp.text;
        response.headers = resp.headers;
        response.statusCode = resp.statusCode;
    }

    return response;
}

/**
 * Execute a given HttpRequest to get string response back
 * @param	{HttpRequest | HttpBodyRequest} request    The query string builder to replace the template parameters
 * @param	{Array} parameters    The parameters to replace in the queryBuilder
 */
function executeRequest(req, callback) {

    //Convert abstracted request to request's http request
    var convertedRequest = convertHttpRequest(req);
    var context = new HttpContext();
    context.request = req;

    //Make a temp callback
    var internalCallback = function cb(error, res) {
        var response = convertHttpResponse(res);
        context.response = response;
        var err;
        if (error && !error.status) {
            //Network error
            err = error;
        }
        callback(err, response, context);
    };

    //Make the request;
    convertedRequest.end(internalCallback);

}
module.exports = executeRequest;
