
/**
 * BotifyAPILib
 *
 * This file was automatically generated for Botify by APIMATIC BETA v2.0 on 01/11/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UrlsQuery
 *
 * @constructor
 */
function UrlsQuery() {
    this.fields = null;     
    this.filters = null;     
    this.sort = null;     
}

UrlsQuery.prototype = new BaseModel();
UrlsQuery.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
UrlsQuery.prototype.getFields = function() {
    return this.fields;
};

/**
 * Setter for Fields
 * 
 * @param {array|null} value 
 */
UrlsQuery.prototype.setFields = function(value) {
    this.fields = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {mixed|null}
 */
UrlsQuery.prototype.getFilters = function() {
    return this.filters;
};

/**
 * Setter for Filters
 * 
 * @param {mixed|null} value 
 */
UrlsQuery.prototype.setFilters = function(value) {
    this.filters = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {array|null}
 */
UrlsQuery.prototype.getSort = function() {
    return this.sort;
};

/**
 * Setter for Sort
 * 
 * @param {array|null} value 
 */
UrlsQuery.prototype.setSort = function(value) {
    this.sort = value;
};

module.exports = UrlsQuery;