var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var accooutsRouter = require('./routes/accounts')
var uploadRouter = require('./routes/upload');
var managerRouter = require('./routes/manager');
var readIndexRouter = require('./routes/readIndex');
var addControllerRouter = require('./routes/addController');
var removeControllerRouter = require('./routes/removeController');
var writeIndexRouter = require('./routes/writeIndex');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/accounts', accooutsRouter);
app.use('/upload', uploadRouter);
app.use('/manager', managerRouter);
app.use('/readIndex', readIndexRouter);
app.use('/addController', addControllerRouter);
app.use('/removeController', removeControllerRouter);
app.use('/writeIndex', writeIndexRouter);

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
