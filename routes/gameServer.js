const express = require('express');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());
//router.get('/', auth, (req, res) =>{
router.get('/', auth, (req, res) =>{
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    res.render('game', {username : decoded.username});
});


module.exports = router;