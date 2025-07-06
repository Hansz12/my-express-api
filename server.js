const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Render!');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, API is working!' });
});

// ✅ Tambah API POST di sini
app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ message: 'Name is required.' });
  }
  res.status(201).json({ message: `User ${name} added.` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 
