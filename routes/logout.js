const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
router.use(cookieParser());

router.get('/', (req, res) =>{
    const token = req.cookies.access_token;
    if(token === undefined) return res.status(400).send('You need to login to log out silly..');
    res.cookie('access_token', '', {expires: new Date(0)});
    res.status(200).send('logged out');
});

module.exports = router;