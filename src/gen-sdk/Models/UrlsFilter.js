
/**
 * BotifyAPILib
 *
 * This file was automatically generated for Botify by APIMATIC BETA v2.0 on 02/12/2016
 */
var BaseModel = require("./BaseModel");
/**
 * Creates a instance of UrlsFilter
 *
 * @constructor
 */
function UrlsFilter() {
    this.filters = null;     
}

UrlsFilter.prototype = new BaseModel();
UrlsFilter.prototype.constructor = BaseModel;

/**
 * TODO: Write general description for this method
 *
 * @return {mixed|null}
 */
UrlsFilter.prototype.getFilters = function() {
    return this.filters;
};

/**
 * Setter for Filters
 * 
 * @param {mixed|null} value 
 */
UrlsFilter.prototype.setFilters = function(value) {
    this.filters = value;
};

module.exports = UrlsFilter;