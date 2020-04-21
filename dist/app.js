"use strict";

var _lodash = require("lodash");

var _config = _interopRequireDefault(require("./config"));

var _api = _interopRequireDefault(require("./api"));

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var env = 'production';
var apiBaseUrl = _config["default"][env] && _config["default"][env].apiUrl;

var api = _api["default"].create(apiBaseUrl);

(0, _utils.saveData)('apiUrl', apiBaseUrl);
console.log(_config["default"].production.apiUrl);
console.log('Hello World!');