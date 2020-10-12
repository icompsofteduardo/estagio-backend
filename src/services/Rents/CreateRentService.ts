import { getCustomRepository } from 'typeorm';
import Client from '../../models/Client';

import Rent from '../../models/Rent';
import User from '../../models/User';
import Vehicle from '../../models/Vehicle';
import RentsRepository from '../../repositories/RentsRepository';

interface Request {
    client: Client,
    vehicle: Vehicle,
    startDate: Date,
    finalDate: Date,
    finalValue: number,
    situation: boolean,
    operator: User
}

class CreateRentService {
    public async execute({ client, vehicle, startDate, finalDate, finalValue, situation, operator }: Request): Promise<Rent> {
        const rentsRepository = getCustomRepository(RentsRepository)

        const rent = rentsRepository.create({
            client,
            vehicle,
            startDate,
            finalDate,
            finalValue,
            situation,
            operator
        });

        await rentsRepository.save(rent)
        return rent;
    }
}

export default CreateRentService;