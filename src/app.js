import express from "express"
import routes from "./routes/router.js"

const app = express()
app.use(express.json())

app.use("/", routes)

app.listen(3000, (req,res) => {
    console.log("Servidor na porta 3000")
})

export default app