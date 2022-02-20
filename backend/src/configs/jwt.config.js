const jwt = require('jsonwebtoken')
const { JWT_EXPIRES_TIME } = require('../constant')

// Create a new jwt with a account id
const encodedToken = async (secretKey, user, expire = JWT_EXPIRES_TIME) => {
    return await jwt.sign(
        {
            iss: process.env.JWT_ISS,
            sub: user,
        },
        secretKey,
        {
            expiresIn: expire
        }
    )
}

module.exports = {
    encodedToken
}