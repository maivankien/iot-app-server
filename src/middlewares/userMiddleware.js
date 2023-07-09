const jwtHelper = require('../helpers/jwtHelper')

module.exports = {
    async authUser(req, res, next) {
        const token = req.headers.authorization.split(' ')[1]

        if (!token) {
            return res.status(401).json({
                message: 'Not authorized'
            })
        }
        const check = jwtHelper.decodeToken(token)

        if (check) {
            req.userId = check.id
            next()
        }
        else {
            return res.status(401).json({
                message: 'Not authorized'
            })
        }
    }
}