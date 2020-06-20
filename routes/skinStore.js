const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/', async (req, res) =>{
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    let user = await User.findOne({username: decoded.username});
    console.log(user.purchasedSkins);
    res.render('store', {skins : user.purchasedSkins});
});

// get score
router.get('/', async (req, res) =>{
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    let user = await User.findOne({username: decoded.username});
    res.status(200).send(String(user.Score));
});


// Updating skin
router.put('/', async (req, res) =>{
    const token = req.cookies.access_token;
    // decode the token to get the id.
    let decoded = jwtDecode(token);
    console.log(decoded.username);
    let user = await User.findOne({username: decoded.username});
    console.log("Changing " + decoded.username + " Before: " + user.imgSrc);
    user.imgSrc = req.body.skin;
    console.log("Updated " + decoded.username + " After: " + user.imgSrc);
    await user.save();
    res.end();
});

// Purchasing a skin
router.post('/', async (req, res) =>{
    const token = req.cookies.access_token;
    // decode the token to get the id.
    let decoded = jwtDecode(token);
    console.log(decoded.username);
    let user = await User.findOne({username: decoded.username});
    user.purchasedSkins.push(req.body.skin);
    console.log("Added " + req.body.skin + " to > " + user.purchasedSkins);
    await user.save();
    res.end();
});


module.exports = router;