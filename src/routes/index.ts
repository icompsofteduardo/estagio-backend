import { Router } from 'express';

import vehiclesRouter from './vehicles.routes';
import clientsRouter from './clients.routes';
import rentsRouter from './rents.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/', vehiclesRouter);
routes.use('/', clientsRouter);
routes.use('/', rentsRouter);
routes.use('/', usersRouter);
routes.use('/', sessionsRouter)

export default routes;