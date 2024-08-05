import express from "express"
import routes from "./routes/router.js"
import sequelize from "./database/config.js"

const app = express()
app.use(express.json())

app.use("/", routes)

// sincronizando a conexão com o banco e iniciando o servidor
sequelize.sync().then(async () => {
    try{
        await sequelize.authenticate()

        app.listen(3000, (req,res) => {
            console.log("Servidor na porta 3000")
        })

    }catch(error) {
        console.error("Error connecting to database: ", error)
    }
})

export default app