import request from 'supertest';
import dotenv from 'dotenv';
import sequelize from '../../database/config.js';
import app from '../../app';

dotenv.config()

describe("Testing return getAllUser", () => {
    let server;

    beforeAll(async () => {
        await sequelize.sync()
        await sequelize.authenticate()
        server = app.listen(process.env.PORT_API)
    })

    afterAll(async () => {
        await sequelize.close()
        await server.close()
    })

    test("Should return status 200", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/allUser")
        expect(response.status).toBe(200)
        expect("data" in response.body).toBe(true)
    })
})