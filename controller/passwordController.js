const Password = require('../models/Password');
const {encrypt, decrypt} = require('../util/cryptoUtil');

const getAddPassword = (req,res,next)=>{
    if(!req.session.isLoggedIn){
        res.redirect('/login');
    }
    res.render('add-password')
};

const postAddPassword = (req, res, next)=>{
const {site, username, password} = req.body;
const encryptedPassword = encrypt(password);

const entry = new Password({
    site,
    username,
    password: encryptedPassword,
    userId: req.session.user._id
});
entry.save().then(()=>{
    res.redirect('/passwords');
}).catch((err)=>{
    console.log(err);
});
}

const getPasswords = (req, res)=>{
    if(!req.session.isLoggedIn){
       return res.redirect('/login');
    }

    Password.find({userId:req.session.user._id}).then((entries)=>{
      const data = entries.map(e=>({
        _id: e._id,
        site: e.site,
        username: e.username,
        password: decrypt(e.password)

      }));
      res.render("passwords", {passwords: data});
    }).catch((err)=>{
        console.log('getPasswordsError', err);
    });
}
    const deletePassword = (req, res) => {
  Password.deleteOne({ _id: req.params.id, userId: req.session.user._id })
    .then(() => res.redirect("/passwords"))
    .catch(() => res.send("Error deleting"));
};


module.exports = {getAddPassword,postAddPassword, getPasswords, deletePassword}