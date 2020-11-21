import { Router } from "express";

import AuthenticateUserSerivce from "../services/Session/AuthenticateUserService";

const sessionsRouter = Router();

sessionsRouter.post("/session", async (request, response) => {
    const { email, password } = request.body;

    const authenticateUser = new AuthenticateUserSerivce();

    const { user, token } = await authenticateUser.execute({
        email,
        password
    });

    return response.json({ user, token });
});

export default sessionsRouter;