var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var patients = require('./routes/patients');
var records = require('./routes/records');
var Sequelize = require("sequelize");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/patients', patients);
app.use('/records', records);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// секция sequalize

var syncAll = require('./db/schema/createall');
// console.log(process.env);
// Создание и заполнения базы по модели производится при наличии переменной
// и если база заканчивается на _test

if( process.env.CREATEDB == 'true') {
//   console.log('Заглушка установлена');
//     syncAll();
}
/*
User.findAll().then(function(users) {
  console.log('------findAll------');
  console.log(users);
})

User.findOne().then(function (user) {
   console.log('------findOne------');
   console.log(user.get('displayname'));
});
*/

module.exports = app;