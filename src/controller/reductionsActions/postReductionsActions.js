import { reductionsActions } from "../../model/model.js";

async function postReductionsActions (req,res) {
    try{
      const processPost = req.body
      const newReductionsAction = await reductionsActions.create(processPost)
      
      res.status(201).send({
          mensage:"Comentario adicionado com sucesso",
          NewReductions: newReductionsAction,
      });
     } catch{
        res.status(500).send({ 
          error:"erro,nao foi possivel adicionar novo comentario de Incidente"
        })
     }
  };

export default postReductionsActions


  