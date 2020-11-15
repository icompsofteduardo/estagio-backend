import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ClientsRepository from '../repositories/ClientsRepository';
import CreateClientService from '../services/Clients/CreateClientService';
import ensureAuthentication from '../middlewares/ensureAuthenticated';

const clientsRouter = Router();

clientsRouter.use(ensureAuthentication);

clientsRouter.get('/', async (request, response) => {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const clients = await clientsRepository.find();
    return response.json(clients)
});

clientsRouter.post('/', async (request, response) => {
    try {
        const { first_name, last_name, age, address, email, driver_license } = request.body

        const createClient = new CreateClientService();

        const client = await createClient.execute({
            first_name,
            last_name,
            age,
            address,
            email,
            driver_license
        })

        return response.json(client)
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

clientsRouter.put('/:id', (request, response) => {
    //
});

clientsRouter.post('/:id', (request, response) => {
    //
});

export default clientsRouter;