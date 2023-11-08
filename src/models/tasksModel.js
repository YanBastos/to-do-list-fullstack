/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const connection = require('./connection');

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks'); // "execute()" await for a query SQL
  return tasks;
};

const createTask = async (task) => {
  const { title } = task;
  const query = 'INSERT INTO tasks(title, status, created_at) VALUE (?,?,?)';

  const dateUTC = new Date(Date.now()).toUTCString();
  const [createdTask] = await connection.execute(query, [title, 'pendente', dateUTC]);

  return { insertId: createdTask };
};


module.exports = {
  getAll,
  createTask
};