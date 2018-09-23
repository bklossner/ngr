// Define the required modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet');
var mysql = require('mysql');

// Define the routers
var indexRouter = require('./routes/index');
const gamesRouter = require('./routes/games');

var app = express();

/**
 * @description Implement a basic server security package
 * @link {https://www.npmjs.com/package/helmet}
 * @link {https://expressjs.com/en/advanced/best-practice-security.html#use-helmet}
 */
app.use(helmet());

/**
 * @description Set the server's port, should be different than the client port
 * @type {number}
 */
process.env.PORT = 4000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Establish the database connection global
app.use(function (req, res, next) {
  
  // Database credentials
  const credentials = {
    host: "127.0.0.1",
    user: "root",
    password: "D00dl3Bug72;",
    database: "ngr"
  };
  
  // Bind the database credentials to the global connection object
  res.locals.connection = mysql.createConnection(credentials);
  
  // Connect to the database
  res.locals.connection.connect();
  
  next();
});

// Implement the defined routers listed at the top of this file
app.use('/', indexRouter);
app.use('/games', gamesRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
