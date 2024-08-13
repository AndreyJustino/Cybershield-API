import request from 'supertest';
import dotenv from 'dotenv';
import sequelize from '../../database/config.js';
import app from '../../app';

dotenv.config()

describe("Testing response deleteUser", () => {
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
    test("Should return status 400 if there are empty fields", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .delete("/deleteUser")
            .send({
                "email": "",
                "password": "senha123"
            })
        expect(response.status).toBe(400)
        expect(response.body).toStrictEqual({"message": "Preencha todos os campos."})
    })

    test("Should return status 404 if user don't found", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .delete("/deleteUser")
            .send({
                "email": "email@email.com",
                "password": "senha123"
            })
        expect(response.status).toBe(404)
        expect(response.body).toStrictEqual({"message": "Usuário não encontrado."})
    })

    test("Should return status 401 if password is incorrect", async () => {
        await request(`http://localhost:${process.env.PORT_API}`)
            .post('/register')
            .send({
                "name": "delete",
                "password": "delete123",
                "email": "delete@email.com",
            })
        
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .delete('/deleteUser')
            .send({
                "email": "delete@email.com",
                "password": "delete1234"
            })
        expect(response.status).toBe(401)
        expect(response.body).toStrictEqual({"message": "Senha incorreta."})
    })

    test("Should return status 200 if user delete", async () => {
        const response = await request(`http://localhost:${process.env.PORT_API}`)
            .delete("/deleteUser")
            .send({
                "email": "delete@email.com",
                "password": "delete123"
            })
            expect(response.status).toBe(200)
            expect(response.body).toStrictEqual({"message": "Usuário deletado com sucesso."})
    })
})
