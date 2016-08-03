function index() {}

index.configuration = require('./configuration');
index.AnalysisController = require('./Controllers/AnalysisController');
index.ProjectController = require('./Controllers/ProjectController');
index.UserController = require('./Controllers/UserController');

module.exports = index;
