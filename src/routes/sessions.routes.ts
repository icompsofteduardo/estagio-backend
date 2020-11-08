import { hash } from 'bcryptjs';
import { Router } from 'express';

import AuthenticateUserService from '../services/Session/AuthenticateUserService'
import ensureAuthentication from '../middlewares/ensureAuthenticated';

const sessionsRouter = Router();

sessionsRouter.use(ensureAuthentication);

sessionsRouter.post('/', async (request, response) => {
    try {
        const { email, password } = request.body;

        const authenticateUser = new AuthenticateUserService();

        const { user, token } = await authenticateUser.execute({
            email,
            password
        });

        return response.json({ user, token });
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default sessionsRouter;