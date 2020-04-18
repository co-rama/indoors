const mongoose = require('mongoose');
const User = require('../models/users');

exports.registerUser = (req, res) => {
    res.render('register');
}

exports.postUser = async (req, res)=>{
    const userInfo = req.body;
    let user = await new User({
        username : req.body.username,
        phone : req.body.phone,
        password : req.body.password,
    }); 
    let savedUser = await user.save();

    res.json(savedUser);
};

exports.getAllUser = async (req,  res) => {
    let users = await User.find({});
    res.send(users);
};

