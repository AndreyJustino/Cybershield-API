import request from "supertest";
import { incidentComent } from "../../model/model.js";
import app from "../../app.js";



jest.mock("../../model/model.js")

describe("teste controller:GetIncidenComents",()=>{

    it("deve enviar todos os comentarios de Incidente ",async()=>{
      const MyMock = [{
            id:1 , name:"Andre", gmail:"xablau@gmail.com",
            id:2 , name:"Messi",gamil:"Barcelona@gmail",
            id:3 , name:"cr7",gmail:"real Madrid@gmail.com"
        }];
   incidentComent.findOne.mockResolvedValue(MyMock)
   
   const response = await request(app).delete("/DeleteIncidentsComents")
   expect(response.status).toBe(200)
   expect(response.body).toEqual(MyMock)
    })
})  

describe("teste controller:GetIncidentComents",()=>{
   
    
    it("deve enviar todos os comentarios de Incidente", async () =>{
        incidentComent.findAll.mockRejectadValue(new Error("Error"))
        const response = await request(app).delete("/DeleteIncidentsComents")
        expect(response.status).toBe(500)
        expect(response.body).toEqual({
            error: "falha ao deletar comentarios de incidente"
        })
    })
})