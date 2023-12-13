export const schema = gql`
  type ThankYou {
    id: Int!
    eventId: String!
    event: Event!
    authorId: Int!
    author: User!
    recipientId: Int!
    recipient: User!
    message: String!
    createdAt: DateTime!
  }

  type Query {
    thankYous: [ThankYou!]! @requireAuth
    thankYou(id: Int!): ThankYou @requireAuth
  }

  input CreateThankYouInput {
    eventId: String!
    authorId: Int!
    recipientId: Int!
    message: String!
  }

  input UpdateThankYouInput {
    eventId: String
    authorId: Int
    recipientId: Int
    message: String
  }

  type Mutation {
    createThankYou(input: CreateThankYouInput!): ThankYou! @requireAuth
    updateThankYou(id: Int!, input: UpdateThankYouInput!): ThankYou!
      @requireAuth
    deleteThankYou(id: Int!): ThankYou! @requireAuth
  }
`
