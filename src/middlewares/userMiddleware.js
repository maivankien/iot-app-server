const jwtHelper = require('../helpers/jwtHelper')
const userService = require('../service/userService')

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
            const user = await userService.findOneById(check.id)
            if (!user) {
                return res.status(401).json({
                    message: 'Not authorized'
                })
            }
            delete user.password
            req.user = user
            next()
        }
        else {
            return res.status(401).json({
                message: 'Not authorized'
            })
        }
    }
}