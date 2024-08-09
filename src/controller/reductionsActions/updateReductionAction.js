import { ReductionsActions } from "../../model/model.js";

const UpReductionAction = async (request, response) => { 
	const idParam = request.params.id; 

	try {
		
		const TakeReductionAction = request.body  
		
		const FindReductionAction = await ReductionsActions.findByPk(idParam) 

		if (!FindReductionAction) {
      throw new Error("Not found");
    }
		
		const executedUp = await FindReductionAction.update(TakeReductionAction)

		response.status(201).send({
			message: "Pet criado com suceso",
			executedUp,
		});

	} catch (e) {
		response.status(404).send({
			error: e.message,
		});
	}
};

export{UpReductionAction}