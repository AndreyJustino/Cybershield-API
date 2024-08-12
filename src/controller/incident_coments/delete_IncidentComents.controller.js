import { IncidentComent } from "../../model/model.js";

const deleteIncidentComent = async (req,res)=>{
    try{
        const incidentComents = req.body
        
        if(!incidentComents.comments || !incidentComents.make || !incidentComents.improvement){
            res.status(400).json({
                message:"erro,dados incompletos"
            })
        } else{
             const icDatabase = await IncidentComent.findOne({
                where: {
                    improvement: incidentComents.improvement
                }
             })       
       
        if(!icDatabase){
            res.status(400).json({
            message:"dado nao encontrado"    
            })    
        }else{
            const executeDelete = IncidentComent.destroy({
                where:{
                    improvement: icDatabase.improvement
                }
            })
        }
        res.status(200).json({
            message:"dado deletado com sucesso!"
        })
    }         
    }catch (error){
        res.status(500).json({
           message:"erro ao deltar dado",
            error:error
        })
    }
}

export {deleteIncidentComent}