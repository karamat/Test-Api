"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveData = void 0;

var _localforage = _interopRequireDefault(require("localforage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_localforage["default"].config({
  driver: _localforage["default"].WEBSQL,
  // Force WebSQL; same as using setDriver()
  name: 'myApp',
  version: 1.0,
  size: 4980736,
  // Size of database, in bytes. WebSQL-only for now.
  storeName: 'keyvaluepairs',
  // Should be alphanumeric, with underscores.
  description: 'some description'
});

var saveData = function saveData(key, value) {
  _localforage["default"].setItem('key', 'value').then(function () {
    return _localforage["default"].getItem('key');
  }).then(function (value) {
    return value;
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.saveData = saveData;