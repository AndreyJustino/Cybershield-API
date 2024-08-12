import { Incidents } from '../../models/Incidents.js';

async function getIncidentById(req, res) {
  const { id } = req.params;
  try {
    const incident = await Incidents.findByPk(id);
    if (incident) {
      res.status(200).json({
        message: 'Incidente encontrado.',
        data: incident,
      });
    } else {
      res.status(404).json({
        message: 'Incidente não encontrado.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar incidente.',
      error: error,
    });
  }
}

export default getIncidentById;
