import { Cybershield } from "../../model/model.js";

async function cadastrar(req, res) {
    try{
        const newUser = req.body;

        if(!newUser.name || !newUser.password || !newUser.email ){
            res.status(400).json({message: "Preencha todos os campos!"});
        } else{
            
            const userCreate = await Cybershield.findOrCreate({
                where: {email: newUser.email},
                defaults: newUser
            })

            if(!userCreate[1]){
                res.status(400).json({message: "Email já cadastrado!"});
            } else{
                res.status(200).json({
                    message: "Usuario cadastrado com sucesso.",
                    user: userCreate
                })
            }
        }

    }catch(error){
        res.status(400).json({
            message: "Algum erro aconteceu.",
            erro: error
        })
    }
}

export default cadastrar