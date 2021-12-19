const { ApolloServer, gql } = require("apollo-server");
const { itemCards, categories} = require("./db");
const typeDefs = require('./schema');
const ItemCard = require('./resolvers/itemcard');
const Category = require('./resolvers/categories');
const Query = require('./resolvers/query')

const server = new ApolloServer({ typeDefs, resolvers:{
  ItemCard,
  Category,
  Query
},
context: {
  itemCards,
  categories
} });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
