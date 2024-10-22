const { registerUser, loginUser } = require("../services/userService");

module.exports = {
  Query: {
    getAllUsers: async () => await User.find(),
    getUserById: async (_, { id }) => await User.findById(id),
  },
  Mutation: {
    register: async (_, { username, email, password }) => await registerUser(username, email, password),
    login: async (_, { email, password }) => await loginUser(email, password),
  },
};
