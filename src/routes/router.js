import { Router } from "express";
import register from "../controller/user/register.controller.js";
import getAllUser from "../controller/user/getAllUser.controller.js";

const routes = Router()

routes.get("/allUser", getAllUser)
routes.post("/cadastrar", register)

export default routes