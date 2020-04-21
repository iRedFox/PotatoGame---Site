const express = require('express');
const router = express.Router();
const jwtDecode = require('jwt-decode');
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());
//router.get('/', auth, (req, res) =>{
router.get('/', auth, async (req, res) =>{
    const token = req.cookies.access_token;
    let decoded = jwtDecode(token);
    let listOfUsers = await User.find().sort({Score : -1}).limit(5);
    console.log(listOfUsers);
    res.end();
    res.render('game', {username : decoded.username, listOfUsers : listOfUsers});
});


module.exports = router;