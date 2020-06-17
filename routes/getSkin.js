const {User} = require('../models/user');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.get('/', async (req, res) =>{
    let skinSource = await User.find({},{imgSrc : 1});
    res.status(200).send(String(skinSource[0].imgSrc));
});


module.exports = router;