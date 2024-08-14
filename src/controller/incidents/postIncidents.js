import { Incidents } from '../../models/Incidents.js';

async function createIncident(req, res) {
  const {
    user_id,
    incident_type_id,
    presentation,
    severity,
    date_reported,
    damage_to_device,
    what_damage,
  } = req.body;
  try {
    const newIncident = await Incidents.create({
      user_id,
      incident_type_id,
      presentation,
      severity,
      date_reported,
      damage_to_device,
      what_damage,
    });
    res.status(201).json({
      message: 'Incidente criado com sucesso.',
      data: newIncident,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao criar incidente.',
      error: error.message,
    });
  }
}

export { postIncident };
