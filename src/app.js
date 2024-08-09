import express from "express"
import sequelize from "./database/config.js"
import routesUser from "./routes/user.routes.js"
import routesComent from "./routes/incidentComents.routes.js"
import routesReductionsActions from "./routes/ReductionsActions.routes.js"

const app = express()

app.use(express.json())

app.use("/", routesComent)
app.use("/", routesUser)
app.use("/", routesReductionsActions)

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