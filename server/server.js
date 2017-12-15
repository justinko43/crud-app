const express = require('express');
const path = require('path');
const colors = require('colors');

const SERVER_PORT = 3000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build/index.html'));
});

app.get('/hello', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../build/index2.html'));
});

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}...`.yellow));
