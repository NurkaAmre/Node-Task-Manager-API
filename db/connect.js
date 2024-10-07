const mongoose = require('mongoose');

const connectionString =
  'mongodb+srv://Nurgul:nurgul90@nodeexpress.htg4w.mongodb.net/taskList?retryWrites=true&w=majority&appName=NodeExpress';

const connectDB = (url) => {
  return mongoose.connect(connectionString);
};

module.exports = connectDB;
