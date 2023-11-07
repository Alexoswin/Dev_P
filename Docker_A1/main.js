const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for parsing JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// In-memory user database (for demonstration purposes)
const users = [
  { username: 'user1', password: 'password1' },
  { username: 'user2', password: 'password2' },
];

// Serve the login page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Handle the login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((u) => u.username === username && u.password === password);

  if (user) {
    res.send('Login successful');
  } else {
    res.send('Login failed. Invalid username or password.');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

