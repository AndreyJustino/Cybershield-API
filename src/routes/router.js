import { Router } from "express";
import cadastrar from "../controller/user/cadastrar.controller.js";

const routes = Router()

routes.post("/cadastrar", cadastrar)

export default routes