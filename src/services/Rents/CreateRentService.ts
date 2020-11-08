import { getCustomRepository } from 'typeorm';
import Client from '../../models/Client';

import Rent from '../../models/Rent';
import User from '../../models/User';
import Vehicle from '../../models/Vehicle';
import RentsRepository from '../../repositories/RentsRepository';

interface Request {
    client: Client,
    vehicle: Vehicle,
    start_date: Date,
    final_date: Date,
    final_value: number,
    situation: boolean,
    operator: User
}

class CreateRentService {
    public async execute({ client, vehicle, start_date, final_date, final_value, situation, operator }: Request): Promise<Rent> {
        const rentsRepository = getCustomRepository(RentsRepository)

        const rent = rentsRepository.create({
            client,
            vehicle,
            start_date,
            final_date,
            final_value,
            situation,
            operator
        });

        await rentsRepository.save(rent)
        return rent;
    }
}

export default CreateRentService;