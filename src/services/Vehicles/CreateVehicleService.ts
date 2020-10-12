import { getCustomRepository } from 'typeorm';

import Vehicle from '../../models/Vehicle';
import VehiclesRepository from '../../repositories/VehiclesRepository';

interface Request {
    model: string,
    brand: string,
    plate: string,
    dailyValue: number,
    situation: boolean
}

class CreateVehiclesService {
    public async execute({ model, brand, plate, dailyValue, situation }: Request): Promise<Vehicle> {
        const vehiclesRepository = getCustomRepository(VehiclesRepository)

        const vehicle = vehiclesRepository.create({
            model,
            brand,
            plate,
            dailyValue,
            situation
        });

        await vehiclesRepository.save(vehicle)

        return vehicle;
    }
}

export default CreateVehiclesService;