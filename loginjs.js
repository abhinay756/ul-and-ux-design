const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Handle login form POST
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Simple static check (in real apps, use DB)
  if (username === 'admin' && password === '1234') {
    res.send('✅ Login successful!');
  } else {
    res.send('❌ Invalid credentials!');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
