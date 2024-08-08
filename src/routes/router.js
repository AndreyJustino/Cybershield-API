import { Router } from "express";
import cadastrar from "../controller/user/cadastrar.controller.js";
import getAllUser from "../controller/user/getAllUser.controller.js";
import { CreateComent } from "../controller/incident_coments/post_IncidentComents.controler.js";

const routes = Router()

routes.get("/allUser", getAllUser)
routes.post("/cadastrar", cadastrar)
routes.post("newIncidentComent",CreateComent)

export default routes