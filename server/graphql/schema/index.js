const { gql } = require('apollo-server');

module.exports = gql`
    type User {
      email: String!
    }

    type AuthData {
        token: String!
        tokenExpiration: Int!
    }
    
    type Query {
        users: [User!]!
    }
    type Mutation {
        login(email: String!, password: String!) : AuthData
    }
`;
