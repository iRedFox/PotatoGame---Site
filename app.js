const config = require('config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const auth = require('./routes/auth');
const users = require('./routes/users');
const game = require('./routes/gameServer');
const port = 80;

if(!(config.get('jwtPrivateKey'))){
    console.log('FATAL ERROR: jwtPrivateKey IS NOT DEFINED');
    process.exit(1);
}

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
      console.log('user disconnected');
    });
});

app.set('view engine', 'pug');
app.use(express.static('views'));
app.use(express.json());
app.use('/register', users);
app.use('/login', auth);
app.use('/game', game);

mongoose.connect('mongodb://localhost:27017/potato')
    .then(() => console.log("You're connected to the database"))
    .catch(err => console.log(err))

app.get('/', (req, res) =>{
    res.render('index', {});
});

app.post('/playerScore', (req, res) =>{
    let message = req.body;
    console.log(message);
    res.end();
});


app.listen(port, () => console.log('Server is working at ping 3000'));