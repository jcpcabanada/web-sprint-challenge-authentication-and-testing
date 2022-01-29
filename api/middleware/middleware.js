const db = require('../../data/dbConfig')
const Auth = require('../auth/auth-model')

const availableUsername = async (req, res, next) => {
    const { username } = req.body
    try {
        const users = await Auth.findBy({ username })
        if (users.length) {
            next({
                status: 401,
                message: "Username taken"
            })
        } else {
            next()
        }
    } catch (err) {
        next(err)
    }
}

const checkInput = async (req, res, next) => {
    try {
        const username = await db('users').where('username', req.body.username).first()
        if (username) {
            req.user = username
            next()
        } else {
            next({
                status: 401,
                message: 'invalid credentials'
            })
        }
    } catch (err) {
        next(err)
    }
}


const checkLogin = async (req, res, next) => {
    const { username, password } = req.body
    if(!username || !password) {
        next({
            status: 401,
            message: 'username and password required'
        })
    } else {
        next()
    }
}


module.exports = {
    checkInput,
    availableUsername,
    checkLogin,
}