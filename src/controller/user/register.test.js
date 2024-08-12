const request = require("supertest")
require("dotenv").config()

describe("Testing return register", () => {
    test("Should return 400 if there are empty fields", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .post("/register")
            .send({
                "name": "",
                "password": "senha123",
                "email": "register@mail.com"
            })
        expect(response.status).toBe(400)
        expect(response.body).toStrictEqual({"message": "Preencha todos os campos!"})
    })

    test("Should return 201 if user register", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .post("/register")
            .send({
                "name": "register",
                "password": "senha123",
                "email": "register@mail.com"
            })
        expect(response.status).toBe(201)
    })

    test("Should return 409 if email already exist", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .post("/register")
            .send({
                "name": "register",
                "password": "senha123",
                "email": "register@mail.com"
            })
        expect(response.status).toBe(409)
        expect(response.body).toStrictEqual({"message": "Email já cadastrado!"})
        
        await request(`http://localhost:${process.env.PORT_API}`)
            .delete("/deleteUser")
            .send({
                "email": "register@mail.com",
                "password": "senha123"
            })
    })

})