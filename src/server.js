import express from 'express'
import graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import Customer from './customer'
import 'babel-polyfill'

const schema = buildSchema(`
  type Customer {
    id: String
    name: String
    agentId: String
  }
  
  type Query {
    getCustomer(id: String): Customer
  }
`)

const root = {
  getCustomer: async ({id}) => {
    const customer = new Customer(id)
    await customer.initialize()
    return customer
  }
}

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))

app.listen(4000)

console.log('Running a GraphQL API server at localhost:4000/graphql')