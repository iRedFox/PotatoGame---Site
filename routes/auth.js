const {User} = require('../models/user');
const Joi = require('joi');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) =>{
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({username: req.body.username});
    if(!user) return res.status(400).send('إسم المستخدم او الباسوورد خاطئ.');

    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if(!validPassword) return res.status(400).send('إسم المستخدم او الباسوورد خاطئ.');

    console.log('logged in as: ' + user.username);
    const token = user.generateAuthToken();
    console.log("Token from server: " + token);
    res.cookie('access_token', token, {
        maxAge: 365 * 24 * 60 * 60 * 100,
        httpOnly: true
    });
    res.status(200).end('You logged in.');
});

function validate(req){
    const schema = {
        username: Joi.string().min(5).max(50).required(),
        password: Joi.string().required()
    };
    return Joi.validate(req, schema);
}

module.exports = router;