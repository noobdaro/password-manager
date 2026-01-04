const getSignup = (req, res) =>{
res.render('signup');
};

const postSignup = (req, res, next) => {
const email = req.body.email;
const password = req.body.password;
console.log('credentials', email, password);
res.send('signup successfull');
};

module.exports = {getSignup, postSignup};