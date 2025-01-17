import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import RentsRepository from '../repositories/RentsRepository'
import CreateRentService from '../services/Rents/CreateRentService';
//import ensureAuthentication from '../middlewares/ensureAuthenticated';

const rentsRouter = Router();

//rentsRouter.use(ensureAuthentication);

rentsRouter.get('/rents', async (request, response) => {
    const rentsRepository = getCustomRepository(RentsRepository);
    const rents = await rentsRepository.find();
    return response.json(rents)
});

rentsRouter.get('/rents/:id', async (request, response) => {
    const rentsRepository = getCustomRepository(RentsRepository);
    const rents = await rentsRepository.findOne(request.params.id)
    return response.json(rents)
});

rentsRouter.post('/rent', async (request, response) => {
    try {
        const { client, vehicle, photos, startDate, endDate, finalValue, situation, operator } = request.body

        const createRent = new CreateRentService();

        const rent = await createRent.execute({
            client,
            vehicle,
            photos,
            startDate,
            endDate,
            finalValue,
            situation,
            operator
        })
        rent.situation = true;
        return response.json(rent)
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default rentsRouter;