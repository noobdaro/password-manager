const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PasswordSchema = new Schema({
    site:{type: String, required: true},
     username: { type: String, required: true },
  password: { type: String, required: true }, 
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
})

module.exports = mongoose.model('Password', PasswordSchema);