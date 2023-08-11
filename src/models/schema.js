const { gql } = require('apollo-server')

const typeDefs = gql`

  type Author {
    id: Int
    name: String!
    birthDate: String
    poems: [Poem!]!
  }

  type Poem {
    id: Int
    title: String!
    content: String!
    author: Author!
  }

  type Query {
    getAllAuthors: [Author!]!
    getAuthor(id: Int): Author
    getAllPoems: [Poem!]!
    getPoem(id: Int): Poem
  }

  type Mutation {
    createAuthor(name: String!, birthDate: String): Author!
    updateAuthor(id: Int, name: String, birthDate: String): Author!
    deleteAuthor(id: Int): Int

    createPoem(title: String!, content: String!, authorId: Int): Poem!
    updatePoem(id: Int, title: String, content: String): Poem!
    deletePoem(id: Int): Int
  }
`
module.exports = {
  typeDefs,
}