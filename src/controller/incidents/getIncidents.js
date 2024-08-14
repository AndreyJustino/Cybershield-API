export { deleteIncident };

get;

import { Incidents } from '../../models/Incidents.js';

async function getAllIncidents(req, res) {
  try {
    const allIncidents = await Incidents.findAll();
    res.status(200).json({
      message: 'Todos os incidentes encontrados.',
      data: allIncidents,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao buscar incidentes.',
      error: error,
    });
  }
}

export { getAllIncidents };
