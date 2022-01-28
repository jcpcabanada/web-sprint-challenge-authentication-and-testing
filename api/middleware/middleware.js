const db = require('../../data/dbConfig')

const checkInput = (req, res, next) => {
    const {username, password} = req.body;
    if (!username || !password) {
        next({
            status: 401,
            message: 'username and password required'
        })
    } else {
        next()
    }
}

const availableUsername = async (req, res, next) => {
    const {username} = req.body;
    try {
        const user = await db('users')
            .where({ username })
            .first()
        if(user) {
            next({
                status:401,
                message: 'username taken'
            })
        }
    } catch (e) {
        next(e)
    }
}

const checkLogin = async (req, res, next) => {
    const {username} = req.body;
    try {
        const user = await db('users')
            .where({username})
            .first()
        if(user) {
            req.user = user;
            next()
        } else {
            next({
                status:401,
                message: 'invalid credentials'
            })
        }
    } catch (e) {
        next(e)
    }
}


module.exports = {
    checkInput,
    availableUsername,
    checkLogin,
}