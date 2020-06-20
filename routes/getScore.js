const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

// get score
router.get('/', async (req, res) =>{
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    let user = await User.findOne({username: decoded.username});
    res.status(200).send(String(user.Score));
});

module.exports = router;