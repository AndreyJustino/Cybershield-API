import express from "express"
import routes from "./routes/router.js"
import sequelize from "./database/config.js"

const app = express()

app.use(express.json())

app.use("/", routes)


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