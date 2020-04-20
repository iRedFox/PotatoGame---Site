const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());
let username;

router.post('/', auth, (req, res) =>{
    username = req.body.info.username;
    res.end();
});

router.get('/', auth, (req, res) =>{
    let ca = req.cookies.access_token;
    let base64Url = ca.split('.')[1];
    res.render('game', {username : username});
});


module.exports = router;