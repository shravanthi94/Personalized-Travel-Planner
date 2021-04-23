const express = require('express');

const router = express.Router();
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const auth = require('../../middleware/auth');
const mysql = require('../../config/sqlConnection');

const userstorage = multer.diskStorage({
  destination: `${path.join(__dirname, '../..')}/public/uploads/users`,
  filename: (req, file, cb) => {
    cb(
      null,
      `user${req.user.id}-${Date.now()}${path.extname(file.originalname)}`,
    );
  },
});

const useruploads = multer({
  storage: userstorage,
  limits: { fileSize: 100000000 },
}).single('image');

router.post('/', auth, async (req, res) => {
  console.log(req)
  useruploads(req, res, async (err) => {
    if (!err) {
      const imageQuery = `UPDATE Users SET
      image = '${req.file.filename}' WHERE userID = ${req.user.id}`;
      try {
        mysql.query(imageQuery, (error, result) => {
          if (error) {
            console.log(error);
            res.status(500).send('Database error');
          }
          res.status(200).json(result);
        });
      } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
      }
    } else {
      console.log('Error!', err);
    }
  });
});

router.get('/:img', (req, res) => {
  console.log('backend: ', req.params.img);
  const image = `${path.join(__dirname, '../..')}/public/uploads/users/${
    req.params.img
  }`;
  if (fs.existsSync(image)) {
    res.sendFile(image);
  } else {
    res.sendFile(
      `${path.join(
        __dirname,
        '../..',
      )}/public/uploads/users/placeholderimg.jpg`,
    );
  }
});

module.exports = router;
