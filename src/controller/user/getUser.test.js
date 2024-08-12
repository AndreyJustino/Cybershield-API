import request from 'supertest';
import dotenv from 'dotenv';

dotenv.config()

describe("Testing response getUser", () => {
    test("Should return status 202 and body if user found", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/getUser/admin@mail.com")
        expect(response.status).toBe(202)
        expect(response.body).toStrictEqual({
            "message": "Usuario encontrado",
            "user": {
                "id": 2,
                "name": "Admin",
                "password": "senha123",
                "email": "admin@mail.com",
                "createdAt": "2024-08-10T19:40:55.000Z",
                "updatedAt": "2024-08-10T19:40:55.000Z"
            }
        })
    })

    test("Should return status 404 and body if user not found", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/getUser/naoExiste")
        expect(response.status).toBe(404)
        expect(response.body).toStrictEqual({
            "message": "Usuario não encontrado"
        })
    })

})