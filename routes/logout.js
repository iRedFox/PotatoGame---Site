const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/', (req, res) =>{
    const token = req.cookies.access_token;
    if(token === undefined) res.redirect('/');
    res.cookie('access_token', '', {expires: new Date(0)});
    res.status(200).send('logged out');
});

module.exports = router;