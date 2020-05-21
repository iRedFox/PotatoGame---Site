const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());
router.get('/', auth, async (req, res) =>{
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    // get list of users top 5 points
    let listOfUsers = await User.find().sort({Score : -1});
    console.log(listOfUsers);
    res.render('leaderboard', {listOfUsers : listOfUsers});
});


module.exports = router;