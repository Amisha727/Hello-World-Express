const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Home Page');
});

app.get('/hello', (req, res) => {
  res.status(200).send('hello world');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
