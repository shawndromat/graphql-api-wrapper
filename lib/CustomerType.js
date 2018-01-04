'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var CustomerType = new _graphql.GraphQLObjectType({
  name: 'Customer',
  fields: function fields() {
    return {
      id: { type: _graphql.GraphQLString },
      name: {
        type: _graphql.GraphQLString,
        resolve: function resolve(customer) {
          return customer.name;
        }
      },
      agentId: {
        type: _graphql.GraphQLString,
        resolve: function resolve(customer) {
          return customer.agentId;
        }
      }
    };
  }
});

exports.default = CustomerType;