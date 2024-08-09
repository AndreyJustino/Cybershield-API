import { ReductionsActions } from "../../model/model.js";

const PostReductionsActions = async (req,res)=>{
    try{
      const ProcessPost = req.body
      const NewReductionsAction = await ReductionsActions.create(ProcessPost)
      
      res.status(201).send({
          mensage:"Comentario adicionado com sucesso",
          NewReductions: NewReductionsAction,
      });
     } catch{
      res.status(500).send({ error:"erro,nao foi possivel adicionar novo comentario de Incidente"})
     }
  };
  export {PostReductionsActions};


  