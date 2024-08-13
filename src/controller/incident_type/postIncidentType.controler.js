import { Incidents } from "../../model/model.js"; // ajuste o caminho conforme necessário

// Criar um novo tipo de incidente
const createIncidentType = async (req, res) => {
  try {
    const newIncidentType = await Incidents.create(req.body);
    res.status(201).send({
      message: "Tipo de incidente criado com sucesso",
      data: newIncidentType,
    });
  } catch (error) {
    res.status(500).send({ error: `Erro: ${error.message}` });
  }
};

export default createIncidentType
