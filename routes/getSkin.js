const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) =>{
    let skinSource = await User.find({},{imgSrc : 1});
    console.log(skinSource.imgSrc);
});


module.exports = router;