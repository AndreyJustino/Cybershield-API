import { Router } from "express";

const routes = Router()

routes.get("/helloWord", (req, res) => {
    res.send("Hello, World!")
})

export default routes