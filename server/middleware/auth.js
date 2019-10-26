const jwt = require("jwt-simple");

module.exports = ({ req }) => {
  const token = req.headers.authorization || "";
  try {
    const currentUser = jwt.decode(token, process.env.TOKEN_SECRET);

    return {
      currentUser,
      isAuth: true
    };
  } catch (error) {
    return {
      currentUser: null,
      isAuth: true
    };
  }
};
