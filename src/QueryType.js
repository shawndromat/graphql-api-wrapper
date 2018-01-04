import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import CustomerType from "./CustomerType"
import fetchCustomer from "./serviceCalls/fetchCustomer"

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getCustomer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => fetchCustomer(args.id)
    }
  }),
})

export default QueryType