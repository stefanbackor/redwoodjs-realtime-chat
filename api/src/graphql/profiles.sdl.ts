export const schema = gql`
  type Profile {
    id: Int!
    bio: String
    avatar: String
    user: User!
    userId: Int!
  }

  type Query {
    profiles: [Profile!]! @requireAuth
    profile(id: Int!): Profile @requireAuth
  }

  input CreateProfileInput {
    bio: String
    avatar: String
    userId: Int!
  }

  input UpdateProfileInput {
    bio: String
    avatar: String
    userId: Int
  }

  type Mutation {
    createProfile(input: CreateProfileInput!): Profile! @requireAuth
    updateProfile(id: Int!, input: UpdateProfileInput!): Profile! @requireAuth
    deleteProfile(id: Int!): Profile! @requireAuth
  }
`
