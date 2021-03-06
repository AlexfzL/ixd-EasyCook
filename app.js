/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var recipe = require('./routes/recipe');
var like = require('./routes/like');
var inventory = require('./routes/inventory');
var step = require('./routes/step');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// landing page
app.get('/', index.landing);
// handle user login or signup
app.get('/register', index.register);
app.post('/register', index.handleRegister);
app.get('/login', index.login);
app.post('/login', index.handleLogin);
// handle view recipes
app.get('/recipes', recipe.view);
app.get('/recipe/:name', recipe.viewRecipe);
// handle steps
app.get('/recipe/:name/step', step.view);
app.get('/filter', recipe.filter);
app.post('/dislike', recipe.dislike);
app.post('/like', recipe.like);
// handle like tab
app.get('/like', like.view);
// handle inventory tab
app.get('/inventory', inventory.view);
app.post('/addItem', inventory.addItem);
app.post('/deleteItem', inventory.deleteItem);

http.createServer(app).listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});