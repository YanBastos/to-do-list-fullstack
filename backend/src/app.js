/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const cors = require('cors');
const express = require('express');
const router = require('./router.js');

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;