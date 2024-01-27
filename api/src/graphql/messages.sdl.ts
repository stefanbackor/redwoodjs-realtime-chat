export const schema = gql`
  type Message {
    id: Int!
    content: String!
    room: Room!
    roomId: Int!
    user: User!
    userId: Int!
    createdAt: DateTime!
  }

  type Query {
    messages: [Message!]! @requireAuth
    message(id: Int!): Message @requireAuth
  }

  input CreateMessageInput {
    content: String!
    roomId: Int!
    userId: Int!
  }

  input UpdateMessageInput {
    content: String
    roomId: Int
    userId: Int
  }

  type Mutation {
    createMessage(input: CreateMessageInput!): Message! @requireAuth
    updateMessage(id: Int!, input: UpdateMessageInput!): Message! @requireAuth
    deleteMessage(id: Int!): Message! @requireAuth
  }
`
