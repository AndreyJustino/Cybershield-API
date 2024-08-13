import app from "../../app.js";
import { incidentComent } from "../../model/model.js";
import request from "supertest";

jest.mock("../../model/model.js")

describe("test controller: getIncidentTypes",()=>{
    it("deve mandar todos oscomentarios de incidentes",async()=>{
        const MyMock = [{
            id:1,name:"neymar",gmail:"neyma@gmail.com",
            id:2,name:"suarez",gmail:"susu@gmail.com",
            id:3,name:"coutinho",gmail:"coutao@gmail.com",
        }]
       incidentComent.findAll.mockResolvevalue(MyMock)
       const response = await request(app).get("/AllIncidentsComents") 
       expect(response.status).toBe(200)
       expect(response.body).toEqual(MyMock)
    })
})

describe("test controller: getIncidentTypes",()=>{
    it("deve mandar todos oscomentarios de incidentes",async()=>{
       
        incidentComent.findAll.mockRegectadValue(new Error("Error"))
        const response = await request(app).get("/AllIncidentsComents")
        expect(response.status).toBe(500)
        expect(response.body).toEqual({
            error: "falha ao encontrar comentarios de incidente"
        })
    })
})