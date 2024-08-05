import { Cybershield } from "../../model/model.js";

async function cadastrar(req, res) {
    try{
        const newUser = req.body;

        const user = await Cybershield.create(newUser)

        res.status(200).json({
            mensagem: "Usuario cadastrado com sucesso.",
            user: user
        })

    }catch(error){
        res.status(400).json({
            mensagem: "Algum erro aconteceu.",
            erro: error
        })
    }
}

export default cadastrar