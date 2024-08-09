import { Router } from "express";
import { PostReductionsActions } from "../controller/reductionsActions/postReductionsactions.js";
import { getReductionsActions } from "../controller/reductionsActions/getReductionsActions.js";
import { DeleteReductionAction } from "../controller/reductionsActions/deleteReductionAction.js";
import { UpReductionAction } from "../controller/reductionsActions/updateReductionAction.js";

const routesReductionsActions = Router()
    routesReductionsActions.post("/postReductionsactions", PostReductionsActions)
    routesReductionsActions.get("/reductionsActions", getReductionsActions)
    routesReductionsActions.delete("/deleteReductionAction", DeleteReductionAction)
    routesReductionsActions.put("/updateReductionAction", UpReductionAction)
export default routesReductionsActions