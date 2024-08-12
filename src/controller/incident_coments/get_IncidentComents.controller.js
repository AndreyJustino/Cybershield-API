import { IncidentComent } from "../../model/model.js";

const GetIncidentComents = async (req,res)=>{
    try{
         const executeGet = await IncidentComent.findAll()//nessa const unimos nosso model ao metodo,se der certo mostra ele
         res.status(200).send(executeGet)
} catch{
         res.status(500).send({error:"nao foi possivel consultar Incident coments"})// se der ruim mostra status 500
}
};

export {GetIncidentComents}


