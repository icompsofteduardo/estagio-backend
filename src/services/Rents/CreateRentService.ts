import { getCustomRepository } from 'typeorm';

import Rent from '../../models/Rent';

import RentsRepository from '../../repositories/RentsRepository';

interface IRequest {
    client: number;
    vehicle: number;
    startDate: Date;
    endDate: Date;
    finalValue: number;
    situation: boolean;
    operator: number;
    photos: [];
}

class CreateRentService {
    public async execute({ client, vehicle, startDate, endDate, finalValue, situation, operator, photos }: IRequest): Promise<Rent> {
        const rentsRepository = getCustomRepository(RentsRepository)
        situation = true;
        operator = 1;
        
        const rent = rentsRepository.create({
            client,
            vehicle,
            operator,
            photos,
            startDate,
            endDate,
            finalValue,
            situation
        });

        await rentsRepository.save(rent)
        return rent;
    }
}

export default CreateRentService;