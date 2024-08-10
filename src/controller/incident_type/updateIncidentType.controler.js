import { Incident_types } from "../../model/model.js"; // ajuste o caminho conforme necessário

const updateIncidentType = async (req, res) => {
    try {
      const { id } = req.params;
      const [updated] = await Incident_types.update(req.body, {
        where: { incident_type_id: id },
      });
      if (updated) {
        const updatedIncidentType = await Incident_types.findByPk(id);
        res.status(200).send({
          message: "Tipo de incidente atualizado com sucesso",
          data: updatedIncidentType,
        });
      } else {
        res.status(404).send({ error: "Tipo de incidente não encontrado" });
      }
    } catch (error) {
      res.status(500).send({ error: `Erro: ${error.message}` });
    }
  };

  
export {updateIncidentType}