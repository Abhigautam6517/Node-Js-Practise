const express = require('express');
const route = express.Router();
const userController = require('../controllers/user');
route.post('/register', userController.register);
module.exports = route;