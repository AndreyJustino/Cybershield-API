const deleteIncidentType = async (req, res) => {
    try {
      const { id } = req.params;
      const deleted = await Incident_types.destroy({
        where: { incident_type_id: id },
      });
      if (deleted) {
        res.status(200).send({
          message: "Tipo de incidente deletado com sucesso",
        });
      } else {
        res.status(404).send({ error: "Tipo de incidente não encontrado" });
      }
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  };
  
  export { deleteIncidentType };