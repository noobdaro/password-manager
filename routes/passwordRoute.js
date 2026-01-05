const express = require('express');
const router = express.Router();

const {getAddPassword, postAddPassword, getPasswords, deletePassword} = require('../controller/passwordController')

router.get('/passwords/add',getAddPassword);
router.post('/passwords/add',postAddPassword);
router.get('/passwords',getPasswords);
router.post('/passwords/delete/:id',deletePassword);

module.exports = router;