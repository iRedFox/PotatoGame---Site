const Joi = require('joi');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const config = require('config');

const userSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 50  
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024,
    },
    Score: Number,
    imgSrc: {
        type: String,
        default: '/potatoClick.gif'
    },
    purchasedSkins:{
        type: Array,
        default: ['/potatoClick.gif']
    }
})

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({ username: this.username }, config.get('jwtPrivateKey'));
    return token;
}

const User = new mongoose.model('User', userSchema);



function validateUser(user){
    const schema = {
        username: Joi.string().min(5).max(50).required(),
        password: Joi.string().min(5).max(255).required()
    };
    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;