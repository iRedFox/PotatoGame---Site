const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/', async (req, res) =>{
    const token = req.cookies.access_token;
    // decode the token to get the id.
    let decoded = jwtDecode(token);
    console.log(decoded.username);
    let user = await User.findOne({username: decoded.username});
    res.status(200).end(user.imgSrc);
});


module.exports = router;