import { getRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import User from '../../models/User';
import authConfig from '../../config/auth'

interface Request {
    email: string;
    password: string;
}

interface Response {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: Request): Promise<Response> {
        const usersRepository = getRepository(User)

        const user = await usersRepository.findOne({ where: { email } });

        if (!user) {
            throw new Error('Email ou senha não são validos.');
        }

        let passwordMatched = false;
        if (password === user.password) {
            passwordMatched = true;
        } else {
            throw new Error('Email ou senha não são validos.');
        }

        const { secret, expiresIn } = authConfig.jwt;

        const token = sign({},
            secret,
            {
                subject: user.id.toString(),
                expiresIn: expiresIn
            });

        return { user, token };
    }
}

export default AuthenticateUserService;