import {Router} from 'express';
import vehiclesRouter from './vehicles.routes';
import clientsRouter from './clients.routes';
import rentsRouter from './rents.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/vehicles', vehiclesRouter);
routes.use('/clients', clientsRouter);
routes.use('/rents', rentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter)

export default routes;