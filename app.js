const express = require('express');
const app = express();
const port = 3000;
const tasks = require('./routes/tasks');

//middleware
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Task Manager app!');
});

app.use('/api/v1/tasks', tasks);


// app.get('/api/v1/tasks', (req, res) => { res.send('Task list!'); });
// app.post('/api/v1/tasks', (req, res) => { res.send('Create task!'); });
// app.get('/api/v1/tasks/:id', (req, res) => { res.send('Get a single task!'); });
// app.put('/api/v1/tasks/:id', (req, res) => { res.send('Update task!'); });
// app.delete('/api/v1/tasks/:id', (req, res) => { res.send('Delete task!'); });


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
