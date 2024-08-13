import { Router } from "express";

import getIncidentType from "../controller/incident_type/getIncidentType.controler.js";
import deleteIncidentType from "../controller/incident_type/deleteIncidentType.controler.js";
import createIncidentType from "../controller/incident_type/postIncidentType.controler.js";
import updateIncidentType from "../controller/incident_type/updateIncidentType.controler.js";

const routerIcidentType = Router()

routerIcidentType.get('getIncidentType', getIncidentType )
routerIcidentType.delete("deleteIncidentType", deleteIncidentType)
routerIcidentType.put('updateIncidentType', updateIncidentType)
routerIcidentType.post('createIncidentType', createIncidentType)

export default routerIcidentType

