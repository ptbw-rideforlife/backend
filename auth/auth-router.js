const router = require('express').Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const jwtSecret = require('../config/secret').jwtSecret
const db = require('../data/dbConfig')

router.post('/register/users', async (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash

    const result = await db('users').insert(user)

    if (result) {
        res.status(201).json(result)
    } else {
        res.status(500).json({ message: 'error broski'})
    }
})

router.post('/register/driver', async (req, res) => {
    let user = req.body
    const hash = bcrypt.hashSync(user.password, 12)
    user.password = hash

    const result = await db('driver').insert(user)

    if (result) {
        res.status(201).json(result)
    } else {
        res.status(500).json({ message: 'error broski'})
    }
})

router.post('/login/users', async (req, res) => {
    let body = req.body

    if (body) {
        const user = await db('users').where({phone: body.phone}).first()

        if (user || bcrypt.compareSync(body.password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({ token, message: `Welcome young master ${user.firstname}` })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    } else {
        res.status(500).json({ message: 'error error'})
    }
})

router.post('/login/driver', async (req, res) => {
    let body = req.body

    if (body) {
        const user = await db('driver').where({phone: body.phone}).first()

        if (user || bcrypt.compareSync(body.password, user.password)) {
            const token = generateToken(user)
            res.status(200).json({ token, message: `Welcome young master ${user.firstname}` })
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    } else {
        res.status(500).json({ message: 'error error'})
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        firstname: user.firstname
    }

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, jwtSecret, options)
}


module.exports = router