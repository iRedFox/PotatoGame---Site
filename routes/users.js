const {User, validate} = require('../models/user');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const express = require('express');
const _ = require('lodash');
const router = express.Router();

router.post('/', async (req, res) =>{
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    console.log('validated');
    let user = await User.findOne({username: req.body.username});
    if (user) return res.status(400).send('User already registered.');
    console.log('It is not there');
    user = new User({
        username: req.body.username,
        password: req.body.password,
        Score: 0
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    await user.save();

    const token = user.generateAuthToken();
    console.log('New user: ' + req.body.username);
    console.log('here is the token: ' + token);
    res.cookie('access_token', token, {
        maxAge: 365 * 24 * 60 * 60 * 100,
        httpOnly: true
    }).send(_.pick(user, ['_id', 'username']));
});

module.exports = router;
