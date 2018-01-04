import express from 'express'
import graphqlHTTP from 'express-graphql'
import 'babel-polyfill'
import schema from './schema'

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(4000)

console.log('Running a GraphQL API server at localhost:4000/graphql')