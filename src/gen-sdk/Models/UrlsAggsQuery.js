
/**
 * BotifyAPILib
 *
 * This file was automatically generated for Botify by APIMATIC BETA v2.0 on 02/12/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UrlsAggsQuery
 *
 * @constructor
 */
function UrlsAggsQuery() {
    this.filters = null;     
    this.aggs = null;     
}

UrlsAggsQuery.prototype = new BaseModel();
UrlsAggsQuery.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {mixed|null}
 */
UrlsAggsQuery.prototype.getFilters = function() {
    return this.filters;
};

/**
 * Setter for Filters
 * 
 * @param {mixed|null} value 
 */
UrlsAggsQuery.prototype.setFilters = function(value) {
    this.filters = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
UrlsAggsQuery.prototype.getAggs = function() {
    return this.aggs;
};

/**
 * Setter for Aggs
 * 
 * @param {array|null} value 
 */
UrlsAggsQuery.prototype.setAggs = function(value) {
    this.aggs = value;
};

module.exports = UrlsAggsQuery;