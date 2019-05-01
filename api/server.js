const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()

const usersRouter = require('../users/users-router')
const driverRouter = require('../drivers/driver-router')
const reviewsRouter = require('../reviews/reviews-router')
const authRouther = require('../auth/auth-router')

server.use(express.json(), helmet(), cors())
server.use(usersRouter)
server.use(driverRouter)
server.use(authRouther)
server.use(reviewsRouter)

server.get('/', (req, res) => {
    res.status(200).json({ api: "Ride4Life server up and running"})
})

module.exports = server