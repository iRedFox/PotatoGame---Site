const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());

router.get('/', auth, (req, res) =>{
    let ca = req.cookies.access_token;
    let base64Url = ca.split('.')[1];
    let decodedValue = JSON.parse(atob(base64Url));
    console.log(decodedValue);
    res.render('game', {username : username});
});


module.exports = router;