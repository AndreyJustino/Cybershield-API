import express from "express"
import dotenv from 'dotenv';
import sequelize from "./database/config.js"
import routesUser from "./routes/user.routes.js"
import routesComent from "./routes/incidentComents.routes.js"
import routesReductionsActions from "./routes/reductionsActions.routes.js";
import { routerIcidentType } from "./routes/incidentType.routes.js"

const app = express()
dotenv.config()

app.use(express.json())

app.use("/", routesComent)
app.use("/", routesUser)
app.use("/", routesReductionsActions)
app.use("/", routerIcidentType)



const PORT = process.env.PORT_API || 3000

// sincronizando a conexão com o banco e iniciando o servidor
sequelize.sync().then(async () => {
    try{
        await sequelize.authenticate()

        app.listen(PORT, (req,res) => {
            console.log("Servidor iniciado!")
        })

    }catch(error) {
        console.error("Error connecting to database: ", error)
    }
})

export default app