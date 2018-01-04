'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = require('express-graphql');

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _graphql = require('graphql');

var _customer = require('./customer');

var _customer2 = _interopRequireDefault(_customer);

require('babel-polyfill');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var schema = (0, _graphql.buildSchema)('\n  type Customer {\n    id: String\n    name: String\n    agentId: String\n  }\n  \n  type Query {\n    getCustomer(id: String): Customer\n  }\n');

var root = {
  getCustomer: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var id = _ref.id;
      var customer;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              customer = new _customer2.default(id);
              _context.next = 3;
              return customer.initialize();

            case 3:
              return _context.abrupt('return', customer);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    function getCustomer(_x) {
      return _ref2.apply(this, arguments);
    }

    return getCustomer;
  }()
};

var app = (0, _express2.default)();

app.use('/graphql', (0, _expressGraphql2.default)({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(4000);

console.log('Running a GraphQL API server at localhost:4000/graphql');