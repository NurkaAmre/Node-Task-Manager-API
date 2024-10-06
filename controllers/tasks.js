const getAllTasks = (req, res) => {
  res.send('All items from the file');
};

const createTask = (req, res) => {
  res.json(req.body);
};

module.exports = { getAllTasks, createTask };
