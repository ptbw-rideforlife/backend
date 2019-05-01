const router = require('express').Router()
const db = require('../data/dbConfig')
const restricted = require('../auth/restricted-middleware')

router.get('/reviews', async (req, res) => {
    const reviews = await db('reviews')
    res.status(200).json(reviews)
})

router.post('/reviews', restricted, async (req, res) => {
    const { userID, driverID, review } = req.body

    if (userID && driverID && review && restricted) {
        const result = await db('reviews').insert(req.body)
        res.status(201).json(result)
    } else {
        res.status(422).json({ message: 'Come on dude! We are missing some info'})
    }
})

router.get('/reviews/:id', restricted, async (req, res) => {
    const id = req.params.id

    try {
        const result = await db('reviews').where({id})
        if (result) {
            res.status(200).json(result)
        } else {
            res.status(400).json({ message: 'No specific ID found'})
        }
    } catch(error) {
        res.status(500).json(error)
    }
})

router.delete('/reviews/:id', restricted, async (req, res) => {
    const id = req.params.id
    const result = await db('reviews').where({id}).delete()

    res.status(200).json(result)
})

router.put('/reviews/:id', restricted, async (req, res) => {
    const id = req.params.id  
    try {
        const { phoneNumber, password } = req.body
        if (phoneNumber && password) {
            const updateInfo = await db('reviews').where({id}).update(req.body)
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