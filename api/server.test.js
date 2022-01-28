const request = require('supertest');
const server = require('./server')
const db = require('../data/dbConfig')

test('sanity', () => {
    expect(true).toBe(true)
})

test('NODE_ENV is correct', () => {
    expect(process.env.NODE_ENV).toBe('testing')
})

beforeAll(async () => {
    await db.migrate.rollback()
    await db.migrate.latest()
});

beforeEach(async () => {
    await db('users').truncate()
})

afterAll(async () => {
    await db.destroy()
})

describe('GET /jokes', () => {
    test('Returns error code 403', async () => {
        const res = await request(server).get('/api/jokes')
        expect(res.status).toBe(403)
    })
    test('Returns error message', async () => {
        const res = await request(server).get('/api/jokes')
        expect(res.body.message).toBe(`Token Required`)

    })
})

describe('POST /register', () => {
    test('Returns error/ No Username', async () => {
        const res = await request(server)
            .post('/api/auth/register')
            .send({username: "", password: "1234"})
        expect(res.body.message).toBe('username and password required')
    })
    test('Returns error/ No Password', async () => {
        const res = await request(server)
            .post('/api/auth/register')
            .send({username: "Gabe", password: ""})
        expect(res.body.message).toBe('username and password required')
    })
})

describe('POST /login', () => {
    test('Returns error code 401/ No user in database', async () => {
        const res = await request(server)
            .post('/api/auth/login')
            .send({username: "Heyo", password: "1234"})
        expect(res.status).toBe(401)
    })
    test('Returns error message/ No user in database', async () => {
        const res = await request(server)
            .post('/api/auth/login')
            .send({username: "Ojeez", password: "1234"})
        expect(res.body.message).toBe('invalid credentials')
    })
})

