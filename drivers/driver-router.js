const router = require('express').Router()
const db = require('../data/dbConfig')
const restricted = require('../auth/restricted-middleware')

router.get('/driver', async (req, res) => {
    const driver = await db('driver')
    res.status(200).json(driver)
})

router.post('/driver', async (req, res) => {
    const { username, password } = req.body

    if (username && password) {
        const result = await db('driver').insert(req.body)
        res.status(201).json(result)
    } else {
        res.status(422).json({ message: 'Come on dude! We are missing some info'})
    }
})

router.get('/driver/:id', restricted, async (req, res) => {
    const id = req.params.id

    try {
        const result = await db('driver').where({id})
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).json({ message: 'No specific ID found'})
        }
    } catch(error) {
        res.status(500).json(error)
    }
})

router.delete('/driver/:id', async (req, res) => {
    const id = req.params.id
    const result = await db('driver').where({id}).delete()

    res.status(200).json(result)
})

router.put('/driver/:id', async (req, res) => {
    const id = req.params.id  
    try {
        const { username, password } = req.body
        if (username && password) {
            const updateInfo = await db('driver').where({id}).update(req.body)
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