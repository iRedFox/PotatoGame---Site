const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next){
    console.log(req.cookies);
    const token = req.cookies.access_token;
    if(!token) res.redirect('/');

    try{
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        req.user = decoded;
        next();
    }
    catch(err){
        res.status(400).end('Invalid Token!');
    }
}