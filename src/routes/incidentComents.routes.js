import { Router } from "express";

import { CreateComent } from "../controller/incident_coments/post_IncidentComents.controler.js";

const routesComent = Router()

routesComent.post("newIncidentComent",CreateComent)

export default routesComent