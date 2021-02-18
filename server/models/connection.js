const mysql = require('mysql2/promise');

//MySQL Connection
module.exports = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123',
  database: 'Smarkio_DB',
  port: '3306',
})