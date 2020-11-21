import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import ClientsRepository from '../repositories/ClientsRepository';
import CreateClientService from '../services/Clients/CreateClientService';
//import ensureAuthentication from '../middlewares/ensureAuthenticated';

const clientsRouter = Router();

//clientsRouter.use(ensureAuthentication);

clientsRouter.get('/clients', async (request, response) => {
    const clientsRepository = getCustomRepository(ClientsRepository);
    const clients = await clientsRepository.find();
    return response.json(clients)
});

clientsRouter.post('/client', async (request, response) => {
    try {
        const { firstName, lastName, age, address, email, driverLicense } = request.body

        const createClient = new CreateClientService();

        const client = await createClient.execute({
            firstName,
            lastName,
            age,
            address,
            email,
            driverLicense
        })

        return response.json(client)
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default clientsRouter;