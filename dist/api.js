"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _apisauce = _interopRequireDefault(require("apisauce"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var create = function create(baseURL) {
  var api = _apisauce["default"].create({
    baseURL: baseURL,
    headers: {
      "Cache-Control": "no-cache"
    },
    timeout: 10000
  });

  var fetchData = function fetchData() {
    return api.get('/data');
  };

  return {
    fetchData: fetchData
  };
};

var _default = {
  create: create
};
exports["default"] = _default;