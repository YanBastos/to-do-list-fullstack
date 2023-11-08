/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const connection = require('./connection');

const getAll = async () => {
  const tasks = await connection.execute('SELECT * FROM tasks'); // "execute()" await for a query SQL
  return tasks;
};

module.exports = {
  getAll
};