import { Incidents } from '../../models/Incidents.js';

async function updateIncident(req, res) {
  const { id } = req.params;
  const {
    presentation,
    severity,
    date_reported,
    damage_to_device,
    what_damage,
  } = req.body;
  try {
    const [updated] = await Incidents.update(
      { presentation, severity, date_reported, damage_to_device, what_damage },
      { where: { incidents_id: id } }
    );
    if (updated) {
      const updatedIncident = await Incidents.findByPk(id);
      res.status(200).json({
        message: 'Incidente atualizado com sucesso.',
        data: updatedIncident,
      });
    } else {
      res.status(404).json({
        message: 'Incidente não encontrado.',
      });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Erro ao atualizar incidente.',
      error: error,
    });
  }
}

export default updateIncident;
