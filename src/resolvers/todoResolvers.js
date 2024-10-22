const { getTodos, getTodo, createTodo, updateTodo, deleteTodo } = require("../services/todoService");

module.exports = {
  Query: {
    getAllTodos: async () => await getTodos(),
    getTodoById: async (_, { id }) => await getTodo(id),
    getTodosByUser: async (_, { userId }) => await getTodos({ user: userId }),
  },
  Mutation: {
    addTodo: async (_, { title, description, userId }) => await createTodo(title, description, userId),
    updateTodo: async (_, { id, title, description }) => await updateTodo(id, title, description),
    deleteTodo: async (_, { id }) => await deleteTodo(id),
  },
};
