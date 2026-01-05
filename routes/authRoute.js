const express = require('express');
const { getSignup, postSignup, getLogin, postLogin } = require('../controller/authController');
const router = express.Router();

router.get('/signup', getSignup);

router.post('/signup', postSignup);

router.get('/login', getLogin);

router.post('/login', postLogin);

module.exports = router;