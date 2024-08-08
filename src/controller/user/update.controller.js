import { Cybershield } from "../../model/model.js";

async function update(req, res){
    try{
        const user = req.body

        if(!user.id || !user.name || !user.password || !user.email){
            res.status(400).json({
                message: "Preencha todos os campos."
            })
        }else{
            const findUser = await Cybershield.findOne({
                where: {
                    id: user.id
                }
            })

            if(!findUser){
                res.status(404).json({message: "Usuario não encontrado."})
            } else{
                await Cybershield.update(
                    {
                        name: user.name,
                        password: user.password,
                        email: user.email
                    },
                    {
                        where: {
                            id: user.id
                        }
                    }
                )
                
                const userUpdate = await Cybershield.findOne({
                    where: {
                        id: user.id
                    }
                })
    
                res.status(200).json({
                    message: "Operação bem sucedida.",
                    user: userUpdate
                })
            }
        }

    } catch(error){
        res.status(500).json({
            message: "Algum erro aconteceu",
            erro: error
        })
    }
}

export default update