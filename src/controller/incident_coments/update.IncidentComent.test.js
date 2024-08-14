import app from "../../app.js";
import { incidentComent } from "../../model/model.js";
import request from "supertest";

jest.mock("../../model/model.js")
describe("teste de execuçao Controller:UpdateIncidentComent",()=>{
    it("deve de fato atualizar um dado", async ()=>{
        const MyMock = [{
            id:1,name:"neymar",gmail:"neyma@gmail.com",
            id:2,name:"suarez",gmail:"susu@gmail.com",
            id:3,name:"coutinho",gmail:"coutao@gmail.com",
        }] 
        incidentComent.mockResolveValue(MyMock)
        
        const response = await request(app).update("/UpIncidentsComents")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(MyMock)
    })
})

describe("teste de execuçao Controller:UpdateIncidentComent",()=>{
    it("deve de fato atualizar um dado", async ()=>{
       incidentComent.mockRejectValue(new Error("Error"))
       
        const response = await request(app).update("/UpIncidentsComents")
        expect (response.status).toBe(500)
        expect (response.body).toEqual({
            error:"nao foi possivel atualizar o dado"
        })
    })
})
