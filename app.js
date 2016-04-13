
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session'); // ADDITION! enables session storage; required for flash messages
var flash = require('connect-flash'); // ADDITION! enables flash messages
var moment = require('moment-timezone'); // ADDITION! enables date string formatting


// var mongoose = require('mongoose'); // MONGO ADDITION!
//
// var mongoConnectionString = process.env.MONGOLAB_URI || 'mongodb://localhost/robots_dev'; // MONGO ADDITION!
// mongoose.connect(mongoConnectionString); // MONGO ADDITION!
var db = require("./db") // // MONGO ADDITION! starts a new mongoose connection




var home_routes = require('./app/controllers/home_controller'); // EDIT! recognizes the home controller file, app/controllers/home_controller. was: var routes = require('./routes/index');
var robot_routes = require('./app/controllers/robots_controller'); // EDIT! recognizes the robots controller file, app/controllers/robots_controller. was: var users = require('./routes/users');

var sessionStore = new session.MemoryStore; // ADDITION! the default memory store for sessions in the development environment

var app = express();

app.locals.moment = moment;  // ADDITION! this makes moment available as a variable in every EJS page
app.locals.title = "Robots App!" // ADDITION! set a common title for all EJS views

// view engine setup
app.set('views', path.join(__dirname, 'app/views')); // EDIT! recognizes view templates stored in the app/views directory. was: app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'app/assets'))); // EDIT! recognizes static files stored in the app/assets directory. was: app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
   cookie: { maxAge: 60000 },
   store: sessionStore,
   secret: process.env.SESSION_SECRET || 'robots-session-secret',
   name: 'robots-session-name',
   resave: true,
   saveUninitialized: true
 })); // ADDITION! configures session storage

app.use(flash()); // ADDITION! enables the application to use the flash module

app.use(function (req, res, next) {
 res.locals.messages = require('express-messages')(req, res);
 next();
}); // ADDITION! enables storage of flash messages and makes them accessable to views. must be placed below app.use(cookieParser()) section, and above app.use('/', routes) section

app.use('/', home_routes); // EDIT! orients the location of home paths relative to the root url, "/". was: app.use('/', routes);
app.use('/', robot_routes); // EDIT! orients the location of robot paths relative to the root url, "/". some people might want to orient these reletive to "/robots" instead. was: app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('_error', { // EDIT! recognizes a renamed view template for errors. file name was: res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('_error', { // EDIT! recognizes a renamed view template for errors. file name was: res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
