import { Router } from "express";

import { CreateComent } from "../controller/incident_coments/post_IncidentComents.controler.js";
import { GetIncidentComents } from "../controller/incident_coments/get_IncidentComents.controler.js";


const routesComent = Router()

routesComent.post("newIncidentComent",CreateComent)
routesComent.get("AllIncidentComent", GetIncidentComents)


export default routesComent