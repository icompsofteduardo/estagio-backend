import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import VehiclesRepository from '../repositories/VehiclesRepository'
import CreateVehicleService from '../services/Vehicles/CreateVehicleService'

const vehiclesRouter = Router();

vehiclesRouter.get('/', async (request, response) => {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);
    const vehicles = await vehiclesRepository.find();
    return response.json(vehicles)
});

vehiclesRouter.get('/:id', async (request, response) => {
    const vehiclesRepository = getCustomRepository(VehiclesRepository);
    const vehicles = await vehiclesRepository.findOne(request.params.id)
    return response.json(vehicles)
});

vehiclesRouter.post('/', async (request, response) => {
    try {
        const { model, brand, plate, dailyValue, situation } = request.body

        const createVehicle = new CreateVehicleService();

        const vehicle = await createVehicle.execute({
            model,
            brand,
            plate,
            dailyValue,
            situation
        })

        return response.json(vehicle)
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

export default vehiclesRouter;