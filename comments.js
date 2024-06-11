// Create web server
// Create a new web server using the express module
const express = require('express');
const app = express();

// Use the express.static middleware
app.use(express.static('public'));

// Use the express.json middleware
app.use(express.json());

// Create a new array to store the comments
const comments = [];

// Create a new route to get the comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a new route to post the comments
app.post('/comments', (req, res) => {
  const comment = req.body;
  comments.push(comment);
  res.json(comment);
});

// Start the web server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});