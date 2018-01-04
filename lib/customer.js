'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Customer = function Customer(id) {
  var _this = this;

  _classCallCheck(this, Customer);

  this.initialize = function () {
    return _axios2.default.get('http://localhost:4001/customer/' + _this.id).then(function (response) {
      _this.name = response.data.name;
      _this.agentId = response.data.agentId;
    }).catch(function (_) {
      return {};
    });
  };

  this.id = id;
};

exports.default = Customer;