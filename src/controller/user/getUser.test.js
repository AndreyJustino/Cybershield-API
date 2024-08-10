const request = require("supertest")
require("dotenv").config()

describe("Testing response status getUser", () => {
    test("Should return status 202 if user found", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/getUser/admin@mail.com")
        expect(response.status).toBe(202)
    })

    test("Should return status 404 if user not found", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/getUser/naoExiste")
        expect(response.status).toBe(404)
    })

})

describe("Testing return body getUser", () => {
    test("Should return the body with the info user", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .get("/getUser/admin@mail.com")
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

    test("Should return body with 'message: Usuario não encontrado' if user not found", 
        async () => {
            const response = await request(`http://localhost:${process.env.PORT_API}`)
                .get("/getUser/naoExiste@mail.com")
            expect(response.body).toStrictEqual({
                "message": "Usuario não encontrado"
            })
    })
})