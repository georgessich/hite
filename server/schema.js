const {gql} = require('apollo-server');
const typeDefs = gql`
  type ItemCard {
    id: ID!
    title: String!
    image: String
    price: String!
    materials: [String]
    description: [String]
    rating: Float
    category: Category
    slug: String!
  }
  type Category {
    id: ID!
    category: String!
    slug: String!
    itemCards: [ItemCard!]!
  }

  type Query {
    itemCards: [ItemCard!]
    itemCard(slug: String!): ItemCard
    categories: [Category]
    category(slug: String!): Category
  }
`;

module.exports = typeDefs;