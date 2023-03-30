const express = require('express')
const profileController = require('../controllers/profiles')
const storage = require('../helpers/storage')
const router = express.Router()

router.get('/',profileController.getProfile)

router.post('/',storage, profileController.postProfile);



module.exports = router