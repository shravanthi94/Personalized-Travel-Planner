const mysql = require('mysql');

var mysqlConnection = mysql.createPool({
  connectionLimit: 500,
  host: 'travelplanner.c2dj6ypzqx9e.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'travelPlanner',
  insecureAuth: true,
});

mysqlConnection.getConnection((err) => {
  if (!err) {
    console.log('Connected to SQL Database');
  } else {
    console.log('SQL Database Connection Failed' + err);
  }
});

module.exports = mysqlConnection;
