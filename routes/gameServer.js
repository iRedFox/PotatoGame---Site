const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');
const auth = require('../middleware/auth');

router.use(cookieParser());

router.get('/', auth, (req, res) =>{
    res.render('game', {});
});


module.exports = router;