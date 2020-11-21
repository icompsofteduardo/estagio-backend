import { Router } from 'express';
import { getCustomRepository } from 'typeorm';

import CreateUserService from '../services/Users/CreateUserService';
import UsersRepository from '../repositories/UsersRepository'

const usersRouter = Router();

usersRouter.get('/users', async (request, response) => {
    const usersRepository = getCustomRepository(UsersRepository);
    const users = await usersRepository.find();
    return response.json(users)
});

usersRouter.post('/user', async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const createUser = new CreateUserService();

        const user = await createUser.execute({
            name,
            email,
            password
        });

        return response.json(user);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default usersRouter;