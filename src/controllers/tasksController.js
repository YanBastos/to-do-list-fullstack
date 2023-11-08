/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const connection = require('../models/connection');
const tasksModel = require('../models/tasksModel');


const getAll = async (req, res) => {
  const [tasks] = await connection.execute('SELECT * FROM tasks');
  return tasks;
  // return res.status(200).json(tasks);
};

module.exports = {
  getAll
};