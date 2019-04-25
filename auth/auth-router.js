const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecret = require('../config/secret').jwtSecrets
const db = require('../data/dbConfig')

router.post('/register', async (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash

    const result = await db('users').insert(user)

    if (result) {
        res.status(201).json(result)
    }
})

module.exports = router