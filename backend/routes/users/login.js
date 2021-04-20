const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const config = require('config');
const mysql = require('../../config/sqlConnection');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  try {
    // 1. Fetch user query
    const query = `SELECT userID, email, password FROM Users WHERE email = '${email}'`;

    mysql.query(query, async (error, result) => {
      if (error) {
        console.log(error);
        return res.status(500).send('Server Error');
      }

      //  2. Handle for invalid credentials
      if (result.length === 0) {
        console.log('Profile not found');
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentails' }] });
      }

      //  3. Decrypt the password
      const isMatch = await bcrypt.compare(password, result[0].password);

      if (!isMatch) {
        console.log('Incorrect Password');
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials.' }] });
      }

      //  Send the web token
      const payload = {
        user: {
          id: result[0].userID,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 6000000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token, id: result[0].userID });
        },
      );
    });
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
