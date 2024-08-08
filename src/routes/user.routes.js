import { Router } from "express";

import register from "../controller/user/register.controller.js";
import getAllUser from "../controller/user/getAllUser.controller.js";
import update from "../controller/user/update.controller.js";

const routesUser = Router()

routesUser.get("/allUser", getAllUser)
routesUser.post("/register", register)
routesUser.put("/updateUser", update)

export default routesUser