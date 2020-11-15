import { getCustomRepository } from 'typeorm';

import Rent from '../../models/Rent';

import RentsRepository from '../../repositories/RentsRepository';

class CreateRentService {
    public async execute({ client, vehicle, start_date, end_date, final_value, situation, operator }: any): Promise<Rent> {
        const rentsRepository = getCustomRepository(RentsRepository)
        situation = true;
        operator = 1;
        const rent = rentsRepository.create({
            client,
            vehicle,
            start_date,
            end_date,
            final_value,
            situation,
            operator
        });

        await rentsRepository.save(rent)
        return rent;
    }
}

export default CreateRentService;