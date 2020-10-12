import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import RentsRepository from '../repositories/RentsRepository'
import CreateRentService from '../services/Rents/CreateRentService';

const rentsRouter = Router();

rentsRouter.get('/', async (request, response) => {
    const rentsRepository = getCustomRepository(RentsRepository);
    const rents = await rentsRepository.find();
    return response.json(rents)
});

rentsRouter.get('/:id', async (request, response) => {
    const rentsRepository = getCustomRepository(RentsRepository);
    const rents = await rentsRepository.findOne(request.params.id)
    return response.json(rents)
});

rentsRouter.post('/', async (request, response) => {
    try {
        const { client, vehicle, startDate, finalDate, finalValue, situation } = request.body

        const createRent = new CreateRentService();

        const rent = await createRent.execute({
            client,
            vehicle,
            startDate,
            finalDate,
            finalValue,
            situation
        })

        return response.json(rent)
    } catch (error) {
        return response.status(400).json({ error: error.message });
    }
});

/*
app.post('/product', async (req, res) => {
    await repository.save(req.body)
    res.end()
})

app.put('/product', async (req, res) => {
    await repository.update(req.body)
    res.end()
})

app.delete('/product/:productId', async (req, res) => {
    let productId = req.params.productId
    await repository.delete(productId)
    res.end()
})
*/
export default rentsRouter;