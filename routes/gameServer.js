const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());
//router.get('/', auth, (req, res) =>{
router.get('/', auth, async (req, res) =>{
    let rank = 0;
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    // get list of users top 5 points
    let listOfUsers = await User.find().sort({Score : -1});
    for(let i = 0; i < listOfUsers.length; i++){
        if(listOfUsers[i].username === decoded.username){
            rank = i+1;
        }
    }
    //console.log(listOfUsers);
    res.render('game', {username : decoded.username, rank : rank});
});


module.exports = router;