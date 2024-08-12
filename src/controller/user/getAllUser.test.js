import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config()

describe("Testing return getAllUser", () => {
    test("Should return status 200", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/allUser")
        expect(response.status).toBe(200)
    })
})