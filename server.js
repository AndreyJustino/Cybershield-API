// importações de funções e bibliotecas
import sequelize from "./src/database/config.js"
import dotenv from "dotenv"
import app from "./src/app.js"

dotenv.config()

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


