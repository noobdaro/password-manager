const bcrypt = require('bcrypt');
const User = require('../models/user')

const getSignup = (req, res) =>{
res.render('signup');
};

const postSignup = (req, res, next) => {
const email = req.body.email;
const password = req.body.password;

User.findOne({email}).then((existingUser)=>{
    if(existingUser){
        return res.send('User already exists');
    }
    bcrypt.hash(password, 12,(err,hashedPassword) =>{
        if(err){
           return res.send('error while hashing password');
        }
        const user = new User({
            email:email,
            password: hashedPassword
        });
        user.save().then(()=>{
           return res.send("signup succesful");
        }).catch ((err)=>{
            console.log(err)
        });
    });

})
.catch((err)=>{
    console.log(err);
});
};

module.exports = {getSignup, postSignup};