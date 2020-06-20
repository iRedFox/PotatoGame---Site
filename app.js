const config = require('config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const auth = require('./routes/auth');
const users = require('./routes/users');
const clicks = require('./routes/clickPotato');
const logout = require('./routes/logout');
const game = require('./routes/gameServer');
const store = require('./routes/skinStore');
const getScore = require('./routes/getScore');
const skin = require('./routes/getSkin');
const leaderboard = require('./routes/leaderboard');
const cookieParser = require('cookie-parser');
const port = 80;

if(!(config.get('jwtPrivateKey'))){
    console.log('FATAL ERROR: jwtPrivateKey IS NOT DEFINED');
    process.exit(1);
}

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.static('views'));
app.use(express.json());
app.use('/register', users);
app.use('/login', auth);
app.use('/logout', logout);
app.use('/game', game);
app.use('/store', store);
app.use('/getSkin', skin);
app.use('/getScore', getScore);
app.use('/clickRegistry', clicks);
app.use('/leaderboard', leaderboard);

//mongodb://localhost:27017/potato
mongoose.connect('mongodb://localhost:27017/potato')
    .then(() => console.log("You're connected to the database"))
    .catch(err => console.log(err))

app.get('/', (req, res) =>{
    // if he's logged in.
    const token = req.cookies.access_token;
    if(token){
        res.redirect('/game');
    // else go render index
    }else{
        res.render('index', {});
    }
});

app.listen(port, () => console.log('Server is working at ping 80'));