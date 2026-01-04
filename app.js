const express = require("express");
const path = require('path')

const app = express();

app.use(express.urlencoded({ extended: true }));

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const authRoutes = require('./routes/authRoute');
app.use(authRoutes);

app.get('/', (req, res, next) =>{
   res.redirect('/signup');
});



app.listen(3000);
