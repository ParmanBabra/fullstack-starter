const jwt = require("jwt-simple");

const users = [
  { email: "testing1@testing.com" },
  { email: "testing2@testing.com" },
  { email: "testing3@testing.com" },
  { email: "testing4@testing.com" },
  { email: "testing5@testing.com" },
  { email: "testing6@testing.com" }
];

module.exports = {
  Query: {
    users: async (_, args, context) => {
      return users;
    }
  },
  Mutation: {
    login: async (_, args, context) => {
      const token = await jwt.encode(
        { email: args.email },
        process.env.TOKEN_SECRET
      );

      return {
        token: token,
        tokenExpiration: 1
      };
    }
  }
};
