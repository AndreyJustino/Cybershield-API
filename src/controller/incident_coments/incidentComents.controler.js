import { IncidentComent } from "../../model/model.js";

export const CreateComent = async (req,res)=>{
  try{
    const ProcessPost = req.body
    const NewIncidentComent = await IncidentComent.create(ProcessPost)
    
    res.status(201).send({
        mensage:"Comentario adicionado com sucesso",
        NewComent: NewIncidentComent,
    });
   } catch{
    res.status(500).send({ error:"erro,nao foi possivel adicionar novo comentario de Incidente"})
   }
};

