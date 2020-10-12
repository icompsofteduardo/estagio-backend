import {Router} from 'express';
import vehiclesRouter from './vehicles.routes';
import clientsRouter from './clients.routes';
import rentsRouter from './rents.routes';

const routes = Router();

routes.use('/vehicles', vehiclesRouter);
routes.use('/clients', clientsRouter);
routes.use('/rents', rentsRouter);

export default routes;