const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());
router.get('/', auth, async (req, res) =>{
    let rank = 0;
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    let listOfUsers = await User.find().sort({Score : -1});
    //console.log(listOfUsers);
    res.render('test', {username : decoded.username});
});

router.post('/', async (req, res) =>{
    const token = req.cookies.access_token;
    // decode the token to get the id.
    let decoded = jwtDecode(token);
    console.log(decoded.username);
    let user = await User.findOne({username: decoded.username});
    user.imgSrc = req.body.ghostSkin;
    await user.save();
    res.end();
});


module.exports = router;