import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

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
    }
  })
})

export default CustomerType