const router = require('express').Router()
const db = require('../data/dbConfig')
const restricted = require('../auth/restricted-middleware')



router.get('/users', async (req, res) => {
    const users = await db('users')
    res.status(200).json(users)
})

router.post('/users', async (req, res) => {
    const { phone, password } = req.body

    if (phone && password) {
        const result = await db('users').insert(req.body)
        res.status(201).json(result)
    } else {
        res.status(422).json({ message: 'Come on dude! We are missing phone and password info'})
    }
})

router.get('/users/:id', restricted, async (req, res) => {
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

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id
    const result = await db('users').where({id}).delete()

    res.status(200).json(result)
})

router.put('/users/:id', async (req, res) => {
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

module.exports = router