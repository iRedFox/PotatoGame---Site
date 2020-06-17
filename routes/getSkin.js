const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', auth, async (req, res) =>{
    let skinSource = await User.find(imgSrc);
    console.log(skinSource);
});


module.exports = router;