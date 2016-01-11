/**
  * @module BotifyAPILib
  *  
  * Botify Saas API
  */

var configuration = require('./configuration'),
    AnalysisController = require('./Controllers/AnalysisController'),
    ProjectController = require('./Controllers/ProjectController'),
    UrlsAggsQuery = require('./Models/UrlsAggsQuery'),
    UrlsQuery = require('./Models/UrlsQuery'),
    UrlsFilter = require('./Models/UrlsFilter');


function initializer(){}

//Main functional components of BotifyAPILib
initializer.configuration = configuration;
initializer.AnalysisController = AnalysisController;
initializer.ProjectController = ProjectController;

//Main Models of BotifyAPILib
initializer.UrlsAggsQuery = UrlsAggsQuery;
initializer.UrlsQuery = UrlsQuery;
initializer.UrlsFilter = UrlsFilter;

module.exports = initializer;