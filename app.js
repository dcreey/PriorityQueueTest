var express = require('express');
var logger = require('morgan');

var routes = require('./routes/index');
var users = require('./routes/users');
var mocha = require('mocha')

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

app.use('/', routes);
app.use('/users', users);

module.exports = app;
