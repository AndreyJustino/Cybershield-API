import { Router } from "express";

import { CreateComent } from "../controller/incident_coments/post_IncidentComents.controller.js";
import { GetIncidentComents } from "../controller/incident_coments/get_IncidentComents.controller.js";
import { generateUpdate } from "../controller/incident_coments/update_IncidentComents.controller.js";
import { deleteIncidentComent } from "../controller/incident_coments/delete_IncidentComents.controller.js";


const routesComent = Router()

routesComent.post("newIncidentComent",CreateComent)
routesComent.get("AllIncidentsComents",GetIncidentComents)
routesComent.put("UpIncidentsComents",generateUpdate)
routesComent.delete("DeleteIncidentComents",deleteIncidentComent)


export default routesComent