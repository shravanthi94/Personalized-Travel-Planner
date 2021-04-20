const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('../../config/sqlConnection');

router.post('/', async (req, res) => {});

module.exports = router;
