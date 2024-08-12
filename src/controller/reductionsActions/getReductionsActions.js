import { reductionsActions } from "../../model/model.js";

const getReductionsActions = async (request, response) => {  
	try {
		const reduction = await reductionsActions.findAll(); 
		response.status(200).send(reduction);
	} catch {
		response.status(500).send({
			error: "Não foi possível encontrar",
		});
	}
};

export default getReductionsActions