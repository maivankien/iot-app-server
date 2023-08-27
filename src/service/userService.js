const connection = require('../config/database')
const pool = connection.promise()

module.exports = {
    async findOneUserName(username) {
        const sql = `select * from users where username = '${username}'`
        const user = await pool.query(sql)
        return user[0][0]
    },

    async findOneById(id) {
        const sql = 'select * from users where id = ?'
        const user = await pool.query(sql, [id])
        return user[0][0]
    },

    async createUser(input) {
        const sql = `insert into users (username, password) values ('${input.username}', '${input.password}')`
        const user = await pool.query(sql)
        return user[0]
    },

    async updateUser(input, id) {
        let sql = 'UPDATE users SET'

        const keys = Object.keys(input)
        const values = Object.values(input)

        for (let i = 0; i < keys.length; i++) {
            sql += ` ${keys[i]} = '${values[i]}'`
            if (i !== keys.length - 1) {
                sql += ','
            }
        }
        sql = sql + ` where id = '${id}'`
        return await pool.query(sql)
    }
}