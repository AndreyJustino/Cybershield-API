import { Router } from "express";

import postReductionsActions from "../controller/reductionsActions/postReductionsActions.js"

import getReductionsActions from "../controller/reductionsActions/getReductionsActions.js";

import deleteReductionAction from "../controller/reductionsActions/deleteReductionAction.js";

import upReductionAction from "../controller/reductionsActions/updateReductionAction.js";

const routesReductionsActions = Router()

routesReductionsActions.post("/postReductionsactions", postReductionsActions)
routesReductionsActions.get("/reductionsActions", getReductionsActions)
routesReductionsActions.delete("/deleteReductionAction", deleteReductionAction)
routesReductionsActions.put("/updateReductionAction", upReductionAction)

export default routesReductionsActions