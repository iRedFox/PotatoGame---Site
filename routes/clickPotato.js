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
    let user = await User.findOne({username: decoded.username});
    console.log(user.Score);
    let answer = 0;
    if(req.body.defaultValue === "cursed"){
        answer = -10;
    }else{
        answer = 1;
    }
    user.Score = user.Score + answer;
    console.log(user.Score);
    await user.save();
    res.status(200).send(String(user.Score));
});

router.get('/', async (req, res) =>{
    const token = req.cookies.access_token;
    // decode the token to get the id.
    let decoded = jwtDecode(token);
    console.log(decoded.username);
    let user = await User.findOne({username: decoded.username});
    res.status(200).send(String(user.Score));
});

module.exports = router;