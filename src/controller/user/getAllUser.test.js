import request from 'supertest';
import dotenv from 'dotenv';
import sequelize from '../../database/config.js';
import app from '../../app';
import testConnection from '../../middleware/testConnection.js';

dotenv.config()

describe("Testing return getAllUser", () => {
    let server;
    let response;
    beforeAll(async () => {
        await sequelize.sync().then(async () => {
            await sequelize.authenticate()
            
            response = await testConnection()

            if(!response || response.statusCode != 200){
                server = app.listen(process.env.PORT_API)

            }
        })
    })

    afterAll(async () => {
        if(!response || response.statusCode != 200){
            await sequelize.close()
            await server.close()
        }
    })

    test("Should return status 200", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/allUser")
        expect(response.status).toBe(200)
        expect("data" in response.body).toBe(true)
    })
})