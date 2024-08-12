import { incidentComent } from "../../model/model.js";

 const createComent = async (req,res)=>{
  try{
    const ProcessPost = req.body
    const CreatePost = await incidentComent.create(ProcessPost)
    
    res.status(201).send({
        mensage:"Comentario adicionado com sucesso",
        NewComent: CreatePost,
    });
   } catch{
    res.status(500).send({ error:"erro,nao foi possivel adicionar novo comentario de Incidente"})
   }
};  

export default createComent   
