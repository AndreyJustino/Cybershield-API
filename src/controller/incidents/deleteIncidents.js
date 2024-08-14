import { Incidents } from '../../models/Incidents.js';

async function deleteIncident(req, res) {
  const { id } = req.params;
  try {
    const deleted = await Incidents.destroy({ where: { incidents_id: id } });
    if (deleted) {
      res.status(200).json({
        message: 'Incidente excluído com sucesso.',
      });
    } else {
      res.status(404).json({
        message: 'Incidente não encontrado.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao excluir incidente.',
      error: error,
    });
  }
}
export default deleteIncidents;
