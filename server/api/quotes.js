const express = require('express');
const api = express.Router();
const quotesController = require('../controller/quotesController');
const utility = require('../helper/utility');

api.get('/api/quote', utility.use(quotesController.get));

module.exports = api;
