import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql'
import AgentType from "./AgentType"
import { fetchAgent } from "./serviceCalls/customerServiceCalls"

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: {type: GraphQLString},
    name: {
      type: GraphQLString,
      resolve: customer => customer.name,
    },
    agentId: {
      type: GraphQLString,
      resolve: customer => customer.agentId,
    },
    agent: {
      type: AgentType,
      resolve: customer => fetchAgent(customer.agentId)
    }
  })
})

export default CustomerType