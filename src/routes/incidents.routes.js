import { Router } from 'express';

import deleteIncident from '../controller/incidents/deleteIncidents.js';
import getIncidents from '../controller/incidents/getIncidents.js';
import postIncident from '../controller/incidents/postIncidents.js';
import updateIncident from '../controller/incidents/updateIncidents.js';

const routesIncidents = Router();

routesIncidents.get('getIncidents', getIncidents);
routesIncidents.put('undateIncident', updateIncident);
routesIncidents.delete('deleteIncidents', deleteIncident);
routesIncidents.post('postIncidents', postIncident);

export default Incidents;
