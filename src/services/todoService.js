const Todo = require("../models/todoModel");

const getTodos = async (filter = {}) => await Todo.find(filter).populate("user");
const getTodo = async (id) => await Todo.findById(id).populate("user");
const createTodo = async (title, description, userId) => {
  const todo = new Todo({ title, description, user: userId });
  await todo.save();
  return todo.populate("user");
};
const updateTodo = async (id, title, description) => await Todo.findByIdAndUpdate(id, { title, description }, { new: true }).populate("user");
const deleteTodo = async (id) => {
  await Todo.findByIdAndDelete(id);
  return "Todo deleted successfully";
};

module.exports = { getTodos, getTodo, createTodo, updateTodo, deleteTodo };
