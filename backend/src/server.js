/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const app = require('./app');
require('dotenv').config();

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`server runnning on port ${PORT}`));