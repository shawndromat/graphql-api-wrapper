import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql'
import {fetchProductColors, fetchProductSizes} from "../serviceCalls/customerServiceCalls"

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {type: GraphQLString},
    name: {
      type: GraphQLString,
      resolve: product => product.name,
    },
    category: {
      type: GraphQLString,
      resolve: product => product.category,
    },
    sizes: {
      type: new GraphQLList(GraphQLString),
      resolve: product => fetchProductSizes(product.category)
    },
    colors: {
      type: new GraphQLList(GraphQLString),
      resolve: product => fetchProductColors(product.category)
    }
  })
})

export default ProductType