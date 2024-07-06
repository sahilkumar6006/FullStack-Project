const express = require('express');
const handlerUserSignUp = require('../controllers/user');

const router = express.Router();

router.post('/', handlerUserSignUp)

module.exports = router