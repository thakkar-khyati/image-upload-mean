const mongoose = require('mongoose')

const profileSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    imagePath:{
        type:String,
        required:true
    }
})

const Profile = mongoose.model('Profile', profileSchema)

module.exports = Profile