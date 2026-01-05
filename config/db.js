const mongoose = require('mongoose');

const connectDB = () =>{
    mongoose.connect('mongodb+srv://harshitteotia2000_db_user:Rsf3wGOtIywVI8TD@cluster0.rjhwcwp.mongodb.net/PasswordManager?appName=Cluster0', ).then(()=>{
   console.log('MongoDB connected');
    }).catch((err)=>{
        console.log(err);
    });
}

module.exports = connectDB;