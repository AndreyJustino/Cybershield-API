import express from "express"
import cors from "cors"

import routesUser from "./routes/user.routes.js"
import routesComent from "./routes/incidentComents.routes.js"
import routesReductionsActions from "./routes/reductionsActions.routes.js";
import routerIcidentType from "./routes/incidentType.routes.js"

const app = express()

app.use(express.json())
app.use(cors({origin: "https://cybershield-api.onrender.com"}))

app.use("/", routesComent)
app.use("/", routesUser)
app.use("/", routesReductionsActions)
app.use("/", routerIcidentType)

export default app