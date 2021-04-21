/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
/* eslint-disable no-console */
const express = require('express');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');

const mysql = require('../../config/sqlConnection');

const router = express.Router();

// @route  POST yelp/customer/register
// @desc   Customer SIGNUP route
// @access Public
router.post('/', async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body)

  try {
    //  1. Query to check if customer exists
    const query = `SELECT userID FROM Users WHERE email = '${email}'`;

    mysql.query(query, async (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Server Error');
      }

      if (result.length > 0) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists.' }] });
      }

      //  2. If customer does not exist, hash the password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //  4. save to database

      const insertDataQuery = `INSERT into Users (firstName, lastName, email, password )
            VALUES ('${firstName}', '${lastName}', '${email}', '${hashedPassword}')`;

      mysql.query(insertDataQuery, (error, result) => {
        if (error) {
          console.log(error);
          return res.status(500).send('Server Error');
        }
        //  Pass the jsonwebtoken for that customer
        const payload = {
          user: {
            id: result.insertId,
          },
        };

        jwt.sign(
          payload,
          config.get('jwtSecret'),
          { expiresIn: 6000000 },
          (err, token) => {
            if (err) throw err;
            res.json({ token, id: result.insertId });
          },
        );
      });
    });
  } catch (err) {
    console.log(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
