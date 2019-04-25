const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

const usersRouter = require('../users/users-router')
const authRouther = require('../auth/auth-router')

server.use(express.json(), helmet(), cors())
server.use(usersRouter)
server.use(authRouther)

server.get('/', (req, res) => {
    res.status(200).json({ api: "Ride4Life server up and running"})
})

module.exports = server