import { ReductionsActions } from "../../model/model.js";

export const getReductionsActions = async (request, response) => {  
	try {
		const reduction = await ReductionsActions.findAll(); 
		response.status(200).send(reduction);
	} catch {
		response.status(500).send({
			error: "Não foi possível encontrar",
		});
	}
};

