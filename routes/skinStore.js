const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');
router.use(cookieParser());

router.get('/', async (req, res) =>{
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    res.render('test', {username : decoded.username});
});

router.post('/', async (req, res) =>{
    const token = req.cookies.access_token;
    // decode the token to get the id.
    let decoded = jwtDecode(token);
    console.log(decoded.username);
    let user = await User.findOne({username: decoded.username});
    console.log("Changing " + decoded.username + " Before: " + user.imgSrc);
    user.imgSrc = req.body.ghostSkin;
    console.log("Updated " + decoded.username + " After: " + user.imgSrc);
    await user.save();
    res.end();
});


module.exports = router;