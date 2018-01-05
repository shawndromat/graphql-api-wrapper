import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} from 'graphql'

const RatingType = new GraphQLObjectType({
  name: 'Rating',
  fields: () => ({
    rating: {type: GraphQLInt},
    comment: {type: GraphQLString},
  })
})

export default RatingType