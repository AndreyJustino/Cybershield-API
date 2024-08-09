import { Router } from "express";
import { getReductionsActions } from "../controller/reductionsActions/getReductionsActions.js";

const routesReductionsActions = Router()
    routesReductionsActions.get("/reductionsActions", getReductionsActions)

export default routesReductionsActions