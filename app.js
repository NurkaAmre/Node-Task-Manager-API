const connectDB = require('./db/connect');
const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');
require('dotenv').config();

//middleware
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Task Manager app!');
});

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
