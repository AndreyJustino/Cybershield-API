import { Router } from 'express';
import getAllUser from '../controller/user/getAllUser.controller.js';
import register from '../controller/user/register.controller.js';
import update from '../controller/user/update.controller.js';

const routes = Router();

routes.get('/allUser', getAllUser);
routes.post('/register', register);
routes.put('/updateUser', update);

export default routes;
