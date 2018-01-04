import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

const AgentType = new GraphQLObjectType({
  name: 'Agent',
  fields: () => ({
    id: {type: GraphQLString},
    name: {
      type: GraphQLString,
      resolve: agent => agent.name,
    }
  })
})

export default AgentType