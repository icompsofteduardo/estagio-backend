import { getCustomRepository } from 'typeorm';

import Client from '../../models/Client';
import ClientsRepository from '../../repositories/ClientsRepository';

interface IRequest {
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    email: string;
    driverLicense: string;
}

class CreateClientService {
    public async execute({ firstName, lastName, age, address, email, driverLicense }: IRequest): Promise<Client> {
        const clientsRepository = getCustomRepository(ClientsRepository)

        const client = clientsRepository.create({
            firstName,
            lastName,
            age,
            address,
            email,
            driverLicense
        });

        await clientsRepository.save(client)

        return client;
    }
}

export default CreateClientService;