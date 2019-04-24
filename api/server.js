const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const logger = require('morgan')

const server = express()

server.use(express.json(), logger(), helmet(), cors())


server.get('/', (req, res) => {
    res.status(200).json({ api: "Ride4Life server up and running"})
})

server.use(function(req, res) {
    res.status(404).send('Please enter the correct URL')
})

module.exports = server