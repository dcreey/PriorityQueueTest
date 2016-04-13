var express = require('express');
var logger = require('morgan');

var mocha = require('mocha')

var app = express();

app.use(logger('dev'));

module.exports = app;
