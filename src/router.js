/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

router.get('/tasks', tasksController.getAll);

module.exports = router;