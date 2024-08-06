import { Cybershield } from "../../model/model.js";

async function getAllUser(req, res) {
    const allUser = await Cybershield.findAll()

    res.status(200).json({
        message: "Todos os usuarios encontrados até agora.",
        data: allUser
    })
}

export default getAllUser