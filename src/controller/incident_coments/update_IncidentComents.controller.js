//Primeiro passo: importar o model para a manipulaçao de dados!
//Segundo passo:  Definir uma Função para Atualização:
//Terceiro passo: Capturado Dados da Solicitação 
//Quarto: garanto que todos os campos obrigatorios serao preenchidos 
// quinto: caso realmente todos os campos forem prenchidos FindOne (encontre um unico registro no banco de dados) vamos pedir "improvment" 


import { IncidentComent } from "../../model/model.js";

const generateUpdate = async (req,res)=>{
 try{   
   const IncidentComents = req.body

   if( !IncidentComents.comment || !IncidentComents.make || !IncidentComents.improvement  ){
        res.status(400).json({
        message: "erro,dados incompletos!"
    })
 } else{
        const findIncidentComents = await IncidentComent.findOne({
          where:{
                improvement:capturarDados.improvement
        } 
    })
  if(!findIncidentComents){
          res.status(404).json({message: "informaçao nao encontrada"})
 } else{
    await IncidentComent.update(
        {
            comment: IncidentComents.comment,
            make:IncidentComents.make,
            improvement:IncidentComents.improvement
        },
        {
        where:{
           improvement:IncidentComents.improvement
        }
  }
)
  
     const updateIncidentComment = IncidentComent.findOne({
       where:{
       improvement:IncidentComents.improvement 
    }
  }) 
  res.status(200).json({
       message:"sucesso ao obter dado atualzado",
      IncidentComents: updateIncidentComment
  })
   
}
    }
      } catch(error){ 
          res.status(500).json({
              message:"erro inesperado",
              error:error
    })
  }
 }

 export {generateUpdate}

