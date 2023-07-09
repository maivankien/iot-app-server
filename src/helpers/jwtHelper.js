require("dotenv").config()
const jwt = require('jsonwebtoken')

module.exports = {
    createToken(id) {
        const token = jwt.sign({ id }, process.env.SECRET_KEY)
        return token
    },

    decodeToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY)
            return decoded
        } catch (error) {
            return false
        }
    }
}
