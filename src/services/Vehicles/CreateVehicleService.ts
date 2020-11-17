import { getCustomRepository } from 'typeorm';

import Vehicle from '../../models/Vehicle';
import VehiclesRepository from '../../repositories/VehiclesRepository';

interface IRequest {
    model: string;
    brand: string;
    plate: string;
    dailyValue: number;
    situation: boolean;
}

class CreateVehiclesService {
    public async execute({ model, brand, plate, dailyValue, situation }: IRequest): Promise<Vehicle> {
        const vehiclesRepository = getCustomRepository(VehiclesRepository)

        const vehicle = vehiclesRepository.create({
            model,
            brand,
            plate,
            dailyValue,
            situation
        });

        vehicle.situation = true;
        await vehiclesRepository.save(vehicle)

        return vehicle;
    }
}

export default CreateVehiclesService;