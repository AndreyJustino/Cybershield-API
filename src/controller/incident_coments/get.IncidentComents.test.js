import app from "../../app.js";
import { incidentComent } from "../../model/model.js";
import request from "supertest";
import { mockTastDB } from "../../../Mock/dataBaseMock.js";

jest.mock("../../model/model.js")

describe("test controller: getIncidentTypes",()=>{
    it("deve mandar todos oscomentarios de incidentes",async()=>{
        const MyMock = mockTastDB
       incidentComent.findAll.mockResolvevalue(MyMock)
       const response = await request(app).get("/AllIncidentsComents") 
       expect(response.status).toBe(200)
       expect(response.body).toEqual(MyMock)
    })
})

describe("test controller: getIncidentTypes",()=>{
    it("deve mandar todos oscomentarios de incidentes",async()=>{
       
        incidentComent.findAll.mockRejectadValue(new Error("Error"))
        const response = await request(app).get("/AllIncidentsComents")
        expect(response.status).toBe(500)
        expect(response.body).toEqual({
            error: "falha ao encontrar comentarios de incidente"
        })
    })
})