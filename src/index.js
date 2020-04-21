require('@babel/register')({
  ignore: [],
  presets: ['@babel/env']
});

module.exports = require('./app.js')