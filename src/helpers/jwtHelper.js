require("dotenv").config()
const jwt = require('jsonwebtoken')

module.exports = {
    createToken(id) {
        return jwt.sign({ id }, process.env.SECRET_KEY)
    },

    decodeToken(token) {
        try {
            return jwt.verify(token, process.env.SECRET_KEY)
        } catch (error) {
            return false
        }
    }
}
