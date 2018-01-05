import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import CustomerType from "./CustomerType"
import {fetchCustomer, fetchProduct} from "../serviceCalls/customerServiceCalls"
import ProductType from "./ProductType"

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    getCustomer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => fetchCustomer(args.id)
    },
    getProduct: {
      type: ProductType,
      args: {
        id: { type: GraphQLString },
      },
      resolve: (root, args) => fetchProduct(args.id)
    }
  }),
})

export default QueryType