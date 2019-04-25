const express = require('express')
const cors = require('cors')
const helmet = require('helmet')

const server = express()
const db = require('../data/dbConfig')

server.use(express.json(), helmet(), cors())


server.get('/', (req, res) => {
    res.status(200).json({ api: "Ride4Life server up and running"})
})

server.get('/users', async (req, res) => {
    const users = await db('users')
    res.status(200).json(users)
})

server.post('/users', async (req, res) => {
    const { username, password } = req.body

    if (username && password) {
        const result = await db('users').insert(req.body)
        res.status(201).json(result)
    } else {
        res.status(422).json({ message: 'Come on dude! We are missing some info'})
    }
})

server.get('/users/:id', async (req, res) => {
    const id = req.params.id

    try {
        const result = await db('users').where({id})
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).json({ message: 'No specific ID found'})
        }
    } catch(error) {
        res.status(500).json(error)
    }
})

server.delete('/users/:id', async (req, res) => {
    const id = req.params.id
    const result = await db('users').where({id}).delete()

    res.status(200).json(result)
})

server.put('/users/:id', async (req, res) => {
    const id = req.params.id  
    try {
        const { username, password } = req.body
        if (username && password) {
            const updateInfo = await db('users').where({id}).update(req.body)
            if (updateInfo) {
                res.status(200).json(updateInfo)
            } else {
                res.status(404).json({ message: "The user with the specific id does not exist."})
            }
        } else {
           res.status(400).json({ message: "Missing required info"})
        }
    } catch(error) {
        res.status(500).json(error)
    }
})


server.use(function(req, res) {
    res.status(404).send('Please enter the correct URL')
})

module.exports = server