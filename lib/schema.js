"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require("graphql");

var _QueryType = require("./QueryType");

var _QueryType2 = _interopRequireDefault(_QueryType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _graphql.GraphQLSchema({
  query: _QueryType2.default
});