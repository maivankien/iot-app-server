const express = require("express")
const router = express.Router()

const userController = require('../controllers/userController')
const userMiddleware = require('../middlewares/userMiddleware')

router.post('/register', userController.register)
router.post('/login', userController.login)
router.post('/test', userMiddleware.authUser)

module.exports  = router