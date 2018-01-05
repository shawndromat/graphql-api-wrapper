import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql'
import {fetchProductColors, fetchProductSizes, fetchRatings} from "../serviceCalls/customerServiceCalls"
import RatingType from "./RatingType"

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: {type: GraphQLInt},
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
    },
    ratings: {
      type: new GraphQLList(RatingType),
      resolve: product => fetchRatings(product.id)
    }
  })
})

export default ProductType