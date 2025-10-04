const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send({ renziel: 'here' });
});

// Use the port Render (or Heroku) provides, or fallback to 3000 locally
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
