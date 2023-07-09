require("dotenv").config()
const bcrypt = require('bcrypt')
const jwtHelper = require('../helpers/jwtHelper')
const userService = require('../service/userService')

module.exports = {
    async register(req, res) {
        const { username, password, secret } = req.body
        if (secret !== process.env.SECRET) {
            return res.status(403).json({
                message: 'Forbidden'
            })
        }
        const check = await userService.findOneUserName(username)

        if (check) {
            return res.status(403).json({
                message: 'User already exists'
            })
        } else {
            const hash = await bcrypt.hash(password, 10)
            const user = {
                username,
                password: hash
            }
            const result = await userService.createUser(user)

            if (result) {
                const token = jwtHelper.createToken(result.insertId)
                const updated = await userService.updateUser({ token }, result.insertId)
                user.token = token
                user.id = result.insertId
                delete user.password
                return res.status(201).json(user)
            } else {
                return res.status(500).json({
                    message: 'Internal Server Error'
                })
            }
        }
    },

    async login(req, res) {
        const { username, password } = req.body
        const user = await userService.findOneUserName(username)
        if (!user) {
            return res.status(400).json({
                message: 'Incorrect username or password'
            })
        }
        const check = await bcrypt.compare(password, user.password)

        if (!check) {
            return res.status(400).json({
                message: 'Incorrect username or password'
            })
        } else {
            delete user.password
            return res.status(200).json(user)
        }
    }
}