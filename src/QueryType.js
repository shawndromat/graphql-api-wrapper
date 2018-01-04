import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';
import axios from 'axios'
import CustomerType from "./CustomerType"

const fetchCustomer = (id) => (
  axios.get(`http://localhost:4001/customer/${id}`)
    .then(response => {
      return response.data
    })
    .catch( _ => ({}))
)

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