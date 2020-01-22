const express = require('express');
const helmet = require('helmet');
const logger = require('../middleware/logger');

const carRouter = require('../cars/carRouter');

const server = express();

server.use(helmet());
server.use(logger('short'));
server.use(express.json());

server.use('/api/cars', carRouter);

// If no routes match request
server.use((req, res) => {
  res.status(404).json({
    message: "Route was not found."
  })
})

// Error Handling
server.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({
    message: "An internal error occurred, please try again later."
  })
})

// Default Route
server.get('/', (req, res) => {
  res.send(`<h2>Welcome to the Cars Database!</h2>`);
})

module.exports = server;