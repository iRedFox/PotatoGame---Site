const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next){
    console.log(req.cookies);
    const token = req.cookies.access_token;
    if(!token) return res.status(401).send('Access denied. Sign in or register.');

    try{
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token!');
    }
}