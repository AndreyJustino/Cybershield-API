import { reductionsActions } from "../../model/model.js";

const deleteReductionAction = async (request, response) => {  
	let idParam = request.params.id;

	try {
		let ReductionFromDelete = await reductionsActions.findByPk(idParam)

      	if (!ReductionFromDelete) {
    return response.send("Not found"); 
    }

		await ReductionFromDelete.destroy()

		response.status(204).send();
	} catch (e) {
		response.status(500).send(e.message);
	}
}

export default deleteReductionAction