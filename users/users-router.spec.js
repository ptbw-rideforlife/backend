const request = require('supertest')

const server = require('../api/server')

describe('GET "/users" endpoint testing', () => {
    it('this endpoint should return status code 200', async () => {
        const res = await request(server).get('/users')
        
        expect(res.status).toBe(200)
    })

    it('this endpoint type should return JSON', async () => {
        const res = await request(server).get('/users')

        expect(res.type).toBe('application/json')
    })
})

describe('POST "/users" endpoint testing', () => {
    it('should return status code 201', async () => {
        const newUser = {
            "firstname": "Emily",
            "lastname": "Smith",
            "city": "Kampala",
            "phone": 8882221111,
            "password": "tacos"
        }
        const res = await request(server).post('/users').send(newUser)

        expect(res.status).toBe(201)
    })

    it('should return status code 422', async () => {
        const newUser = {
            "firstname": "steve"
        }
        const res = await request(server).post('/users').send(newUser)

        expect(res.status).toBe(422)
    })
})

describe('GetByID "/users/:id" endpoint testing', () => {
    it('should return status code 200', async () => {
        const res = await request(server).get('/users/1')

        expect(res.status).toBe(200)
    })
})

describe('DELETE "/users/:id" endpoint testing', () => {
    it('should return the item number deleted & status 200', async () => {
        const res = await request(server).delete('/users/1')

        expect(res.status).toBe(200)
        expect(res.body).toBe(0)
    })
})

