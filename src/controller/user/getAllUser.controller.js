import { usuario } from "../../model/model.js";

async function getAllUser(req, res) {
    try{
        const allUser = await usuario.findAll()

        res.status(200).json({
            message: "Todos os usuarios encontrados até agora.",
            data: allUser
        })
    } catch(error){
        res.status(500).json({
            message: "Erro ao buscar usuarios.",
            erro: error
        })
    }
}

export default getAllUser