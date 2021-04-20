const mysql = require('mysql');

var mysqlConnection = mysql.createConnection({
  host: 'travelplanner.c2dj6ypzqx9e.us-west-1.rds.amazonaws.com',
  user: 'admin',
  password: 'admin123',
  database: 'travelPlanner',
  insecureAuth: true,
});

mysqlConnection.connect((err) => {
  if (!err) {
    console.log('Connected to SQL Database');
  } else {
    console.log('SQL Database Connection Failed' + err);
  }
});

module.exports = mysqlConnection;
