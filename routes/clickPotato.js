const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const jwtDecode = require('jwt-decode');
const sound = require('play-sound')(opts = {});
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
    user.Score = user.Score + Number(req.body.defaultValue);
    console.log(user.Score);
    sound.play('./views/click.wav', err =>{
        if (err) console.log('error could not find the sound');
    });
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