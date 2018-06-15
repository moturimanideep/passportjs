const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

// identifying the user from oAuth
	username:String,
	googleId:String,
	thumbnail:String
})

const user = module.exports = mongoose.model('user',userSchema);