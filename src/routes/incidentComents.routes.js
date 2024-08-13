import { Router } from "express";

import createComent from "../controller/incident_coments/post_IncidentComents.controller.js";
import getIncidentComents from "../controller/incident_coments/get_IncidentComents.controller.js";
import generateUpdate  from "../controller/incident_coments/update_IncidentComents.controller.js";
import deleteIncidentComent from "../controller/incident_coments/delete_IncidentComents.controller.js";


const routesComent = Router()

routesComent.post("/newIncidentComent",createComent)
routesComent.get("/AllIncidentsComents",getIncidentComents)
routesComent.put("/UpIncidentsComents",generateUpdate)
routesComent.delete("/DeleteIncidentsComents",deleteIncidentComent)


export default routesComent