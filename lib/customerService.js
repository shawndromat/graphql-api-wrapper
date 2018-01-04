"use strict";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var express = require('express');

var port = 4001;

var app = express();

var customers = {
  "12345": {
    name: "Roger Anderson",
    agentId: "99999"
  },
  "23456": {
    name: "Brenda Oberbrunner",
    agentId: "33333"
  }
};

var agents = {
  "99999": { name: "Agent Smith" },
  "33333": { name: "Agent Bond, James Bond" }
};

var retrieveCustomer = function retrieveCustomer(customerId) {
  var customer = customers[customerId];
  return customer || {
    name: "Customer Joe Schmoe",
    agentId: "99999"
  };
};

var retrieveAgent = function retrieveAgent(agentId) {
  var agent = agents[agentId];
  return agent || { name: "Agent Mystery" };
};

app.route('/customer/:customerId').get(function (req, res) {
  var customerId = req.params.customerId;

  console.log("Requested customer with id: " + customerId);

  res.json(_extends({
    id: customerId
  }, retrieveCustomer(customerId)));
});

app.route('/agent/:agentId').get(function (req, res) {
  var agentId = req.params.agentId;

  console.log("Requested agent with id: " + agentId);

  res.json(_extends({
    id: agentId
  }, retrieveAgent(agentId)));
});

app.listen(port);
console.log("Running the customer service on port " + port);