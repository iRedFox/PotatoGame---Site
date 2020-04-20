const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const jwtDecode = require('jwt-decode');
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.post('/', async (req, res) =>{
    const token = req.cookies.access_token;
    // decode the token to get the id.
    let decoded = jwtDecode(token);
    console.log(decoded.username);
    let user = await User.findOne({username: req.body.username});
    user.Score = user.Score + int(req.body.scoreInfo);
    await user.save();
    console.log(user.Score)
    res.status(200).send(user.Score);
});

module.exports = router;