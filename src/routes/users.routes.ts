import { Router } from 'express';
import CreateUserService from '../services/Users/CreateUserService';
import ensureAuthentication from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

usersRouter.use(ensureAuthentication);

usersRouter.post('/', async (request, response) => {
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