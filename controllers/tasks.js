const getAllTasks = (req, res) => {
  res.send('All items from the file');
};

const createTask = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.send('Get a single task!');
};

const updateTask = (req, res) => {
  res.send('Update task!');
};

const deleteTask = (req, res) => {
  res.send('Delete task!');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
