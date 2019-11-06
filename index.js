const express = require('express');

const server = express();

server.get('/users', (req, res) => {
  res.json([
    {id: 1, username: 'Pedro'},
    {id: 2, username: 'Diego'},
  ]);
});

server.listen(3001);