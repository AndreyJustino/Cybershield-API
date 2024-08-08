import { Router } from "express";

import register from "../controller/user/register.controller.js";
import getAllUser from "../controller/user/getAllUser.controller.js";
import update from "../controller/user/update.controller.js";
import { CreateComent } from "../controller/incident_coments/post_IncidentComents.controler.js";

const routes = Router()

routes.get("/allUser", getAllUser)
routes.post("/register", register)
routes.put("/updateUser", update)
routes.post("newIncidentComent",CreateComent)

export default routes