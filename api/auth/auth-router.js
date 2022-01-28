const router = require('express').Router();
const Auth = require('./auth-model')
const {JWT_SECRET} = require('../secrets/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {
    checkInput,
    availableUsername,
    checkLogin,
} = require('../middleware/middleware')


const makeToken = user => {
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d',
    }
    return  jwt.sign(payload, JWT_SECRET, options);
};


router.post('/register', checkInput, availableUsername, (req, res, next) => {
    const {username, password} = req.body
    const hash = bcrypt.hashSync(password, 8)

    Auth.addUser({username, password: hash})
        .then(user => {
            res.json(user)
        })
        .catch(next)

});

router.post('/login', checkInput, checkLogin,(req, res, next) => {
    const { password } = req.body;
    if(bcrypt.compareSync(password, req.user.password)) {
        const token = makeToken(req.user)
        res.json({
            message: `Welcome, ${req.user.username}`,
            token
        })
    } else {
        next({
            status: 401,
            message: 'invalid credentials'
        })
    }

});

module.exports = router;
