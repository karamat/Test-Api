"use strict";

// require("@babel/register")({
//   ignore: [],
// });
// require('./app');
require('@babel/register')({
  ignore: [],
  presets: ['@babel/env']
});

module.exports = require('./app.js');