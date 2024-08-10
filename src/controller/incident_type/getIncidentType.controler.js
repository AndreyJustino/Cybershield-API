import { Incident_types } from "../../model/model.js"; // ajuste o caminho conforme necessário

 const getIncidentType = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (id) {
            // Busca por um tipo de incidente específico
            const incidentType = await Incident_types.findByPk(id);
            if (incidentType) {
                res.status(200).send({
                    message: "Tipo de incidente encontrado com sucesso",
                    data: incidentType,
                });
            } else {
                res.status(404).send({ error: "Tipo de incidente não encontrado" });
            }
        } else {
            // Busca por todos os tipos de incidentes
            const incidentTypes = await Incident_types.findAll();
            res.status(200).send({
                message: "Tipos de incidentes recuperados com sucesso",
                data: incidentTypes,
            });
        }
    } catch (error) {
        res.status(500).send({ error: `Erro: ${error.message}` });
    }
};
export{getIncidentType}