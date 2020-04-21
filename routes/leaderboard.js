const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) =>{
    let listOfUsers = await User.find().sort({Score : -1}).limit(5);
    console.log(listOfUsers);
    res.end();
});

module.exports = router;