const Profile = require('../models/profile')

exports.getProfile = async(req,res)=>{
    const profiles = await Profile.find({})
    res.status(201).send(profiles)
}

exports.postProfile = async(req,res)=>{
    const {name}= req.body
    const imagePath='http://localhost:3000/images/'+req.file.filename;
    const profile = new Profile({
        name,
        imagePath
    })

    await profile.save();
    res.status(201).send(profile)
}