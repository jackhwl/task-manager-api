const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user', async () => {
    //try {
        await request(app).post('/users').send({ 
            name: 'Wenlin',
            email: 'whuang@viglobal.com',
            password: 'asdfasfdsd123'
        }).expect(201)
    // } catch (err) {
    //     console.log(err)
    // }
})

