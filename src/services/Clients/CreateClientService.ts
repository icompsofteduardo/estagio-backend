import { getCustomRepository } from 'typeorm';

import Client from '../../models/Client';
import ClientsRepository from '../../repositories/ClientsRepository';

interface Request {
    first_name: string,
    last_name: string,
    age: number,
    address: string,
    email: string,
    driver_license: string
}

class CreateClientService {
    public async execute({ first_name, last_name, age, address, email, driver_license }: Request): Promise<Client> {
        const clientsRepository = getCustomRepository(ClientsRepository)

        const client = clientsRepository.create({
            first_name,
            last_name,
            age,
            address,
            email,
            driver_license
        });

        await clientsRepository.save(client)

        return client;
    }
}

export default CreateClientService;