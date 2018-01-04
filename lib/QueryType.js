'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _CustomerType = require('./CustomerType');

var _CustomerType2 = _interopRequireDefault(_CustomerType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fetchCustomer = function fetchCustomer(id) {
  return _axios2.default.get('http://localhost:4001/customer/' + id).then(function (response) {
    return response.data;
  }).catch(function (_) {
    return {};
  });
};

var QueryType = new _graphql.GraphQLObjectType({
  name: 'Query',
  fields: function fields() {
    return {
      getCustomer: {
        type: _CustomerType2.default,
        args: {
          id: { type: _graphql.GraphQLString }
        },
        resolve: function resolve(root, args) {
          return fetchCustomer(args.id);
        }
      }
    };
  }
});

exports.default = QueryType;