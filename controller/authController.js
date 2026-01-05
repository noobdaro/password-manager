const bcrypt = require('bcrypt');
const User = require('../models/user')

//Signup
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

//Login
const getLogin = (req, res, next) =>{
    res.render("Login");
};

const postLogin = (req, res, next)=>{
    const {email, password} = req.body;

   User.findOne({email}).then((user)=>{
    if(!user){
      return  res.send('user not found signup');
    }

    bcrypt.compare(password, user.password, (err, isMatch)=>{
        if(err){
           return console.log(err);
        }
        if(!isMatch){
            return res.send('Invalid password');
        }

        req.session.isLoggedIn = true;
        req.session.user = user;
        console.log('session user: ', req.session.user);

        return res.redirect("/passwords");
    })
   }).catch((err)=>{
   return console.log(err)
   });
};

module.exports = {getSignup, postSignup, getLogin, postLogin};