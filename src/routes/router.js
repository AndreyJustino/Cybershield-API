import { Router } from "express";
import cadastrar from "../controller/user/cadastrar.controller.js";
import getAllUser from "../controller/user/getAllUser.controller.js";

const routes = Router()

routes.get("/allUser", getAllUser)
routes.post("/cadastrar", cadastrar)

export default routes