const express = require('express');
const { getSignup, postSignup } = require('../controller/authController');
const router = express.Router();

router.get('/signup', getSignup);

router.post('/signup', postSignup);

module.exports = router;