const express = require('express');
const api = express.Router();
const memesController = require('../controller/memesController');
const utility = require('../helper/utility');

api.get('/api/meme', utility.use(memesController.get));

module.exports = api;
