const { Router } = require('express');
const express = require('express');
const mysql = require('../../config/sqlConnection');

const router = express.Router();


router.get('/getDetails/:email', (req, res) => {
    const sql = `SELECT * FROM Users WHERE email = '${req.params.email}'`
    
    mysql.query(sql, (err, result) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Some error has occured');
      }
      if (result && result.length > 0 && result[0]) {
        console.log(result)
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(JSON.stringify(result[0]));
      }
    });
  });

  router.post('/updateDetails/:email', (req, res) => {
    const sql = `UPDATE Users 
    SET firstName = '${req.body.firstName}', lastName = '${req.body.lastName}', phone = '${req.body.phone}', headline = '${req.body.headline}'
    WHERE email = '${req.params.email}'`
    mysql.query(sql, (err, result) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Some error has occured');
      }
      if (result && result.affectedRows > 0) {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('USER_UPDATED');
      }
    });
  });

module.exports = router;