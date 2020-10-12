import { getCustomRepository } from 'typeorm';

import Client from '../../models/Client';
import ClientsRepository from '../../repositories/ClientsRepository';

interface Request {
    name: string,
    age: number,
    driverLicense: string 
}

class CreateClientService {
    public async execute({ name, age, driverLicense }: Request): Promise<Client> {
        const clientsRepository = getCustomRepository(ClientsRepository)

        const client = clientsRepository.create({
            name,
            age,
            driverLicense
        });

        await clientsRepository.save(client)

        return client;
    }
}

export default CreateClientService;