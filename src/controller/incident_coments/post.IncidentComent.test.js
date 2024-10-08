import app from "../../app.js";
import { incidentComent } from "../../model/model.js";
import request from "supertest";
import { mockTastDB } from "../../../Mock/dataBaseMock.js";

jest.mock("../../model/model.js") 

describe("testando controller:PostIncidentType",() =>{
    it("deve criar um novo incident Type",async () =>{
        const MyMock = mockTastDB
        incidentComent.create.mockResolveValue(MyMock)
       
        const response = await request(app).post("/newIncidentComent")
        expect(response.status).toBe(200)
        expect(response.body).toEqual(MyMock)
    })
})

describe("testando controller:PostIncidentType",()=>{
    it("deve criar um novo incident Type", async()=>{
        incidentComent.create.mockRejectValue(new Error("Error"))
       
        const response = await request(app).post("/newIncidentComent")
        expect(response.status).toBe(500)
        expect(response.body).toEqual({
            error:"erro ao criar novo comentario de incidente"
        })
    })
})