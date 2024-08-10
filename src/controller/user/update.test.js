const request = require("supertest")
require("dotenv").config()

describe("Testing return update", () => {
    test('Should return status 400 if there are empty fields', async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .put("/updateUser")
            .send({
                "name": "User",
                "password": "",
                "email": "user@mail.com"
            })
        expect(response.status).toBe(400)
        expect(response.body).toStrictEqual({"message": "Preencha todos os campos."})
    })

    test("Should return status 404 if user don't found", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .put("/updateUser")
            .send({
                "name": "User",
                "password": "123456",
                "email": "user@mail.com",
            })
        expect(response.status).toBe(404)
        expect(response.body).toStrictEqual({"message": "Usuario não encontrado."})
    })

    test("Should return status 200 if sucess", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .put("/updateUser")
            .send({
                "name": "Admin",
                "password": "senha123",
                "email": "admin@mail.com",
            })
        expect(response.status).toBe(200)
    })
})