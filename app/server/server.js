require('dotenv').config();
const express = require('express');
const api = require('./api');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8080;
const app = express();

// config express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// api
app.use(api);

// handle errors from controllers
app.use(function(err, req, res, next){

  console.error(err);
  const message = err.raw?.message || err.message || err.sqlMessage;
  return res.status(500).send({ message: message });

});

// start server
const server = app.listen(port, async () => {

  console.log('Server is starting 🚀');

});

module.exports = server;