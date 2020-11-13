import { getCustomRepository } from 'typeorm';

import Vehicle from '../../models/Vehicle';
import VehiclesRepository from '../../repositories/VehiclesRepository';

interface Request {
    model: string,
    brand: string,
    plate: string,
    daily_value: number,
    situation: boolean
}

class CreateVehiclesService {
    public async execute({ model, brand, plate, daily_value, situation }: Request): Promise<Vehicle> {
        const vehiclesRepository = getCustomRepository(VehiclesRepository)

        const vehicle = vehiclesRepository.create({
            model,
            brand,
            plate,
            daily_value,
            situation
        });

        await vehiclesRepository.save(vehicle)

        return vehicle;
    }
}

export default CreateVehiclesService;