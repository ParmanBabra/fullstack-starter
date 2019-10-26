const { gql } = require('apollo-server');

module.exports = gql`
    type User {
      _id: ID!
      email: String!
      password: String
      createDate: String!
    }
    input UserInput {
      email: String!
      password: String!
    }
    type AuthData {
        userId: String!
        token: String!
        tokenExpiration: Int!
    }
    
    type Query {
        users: [User!]!
    }
    type Mutation {
        createUser(userInput: UserInput) : User
        login(email: String!, password: String!) : AuthData
    }
`;
