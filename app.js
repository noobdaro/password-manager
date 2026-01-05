const express = require("express");
const path = require('path');


const session = require('express-session')

const connectDB =  require('./config/db');
connectDB();
const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use(session({
   secret: "mysecretkey",
   resave: false,
    saveUninitialized: false
}))

// EJS setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
const authRoutes = require('./routes/authRoute');
app.use(authRoutes);

const passwordRoutes = require('./routes/passwordRoute');
app.use(passwordRoutes);

app.get('/dashboard', (req, res, next)=>{
   if(!req.session.isLoggedIn){
      return res.redirect('/login');
   }
   res.render("dashboard");
});

app.get('/logout', (req, res, next)=>{
   req.session.destroy(()=>{
      res.redirect('/login');
   });
});

app.get('/', (req, res, next) =>{
   res.redirect('/signup');
});


app.listen(3000);
