import express from 'express'
import graphqlHTTP from 'express-graphql'
import 'babel-polyfill'
import schema from './schema'

const app = express()
const PORT = process.env.PORT || 4000

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}))

app.listen(PORT)

console.log(`Running a GraphQL API server at localhost:${PORT}/graphql`)