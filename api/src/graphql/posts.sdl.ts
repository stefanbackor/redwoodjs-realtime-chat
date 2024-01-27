export const schema = gql`
  type Post {
    id: Int!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String!
    content: String
    published: Boolean!
    author: User!
    authorId: Int!
    categories: [Category]!
  }

  type Query {
    posts: [Post!]! @requireAuth
    post(id: Int!): Post @requireAuth
  }

  input CreatePostInput {
    title: String!
    content: String
    published: Boolean!
    authorId: Int!
  }

  input UpdatePostInput {
    title: String
    content: String
    published: Boolean
    authorId: Int
  }

  type Mutation {
    createPost(input: CreatePostInput!): Post! @requireAuth
    updatePost(id: Int!, input: UpdatePostInput!): Post! @requireAuth
    deletePost(id: Int!): Post! @requireAuth
  }
`
