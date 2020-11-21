import { getRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import auth from "../../config/auth";

import User from "../../models/User";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: User;
    token: string;
}

class AuthenticateUserService {
    public async execute({ email, password }: IRequest): Promise<IResponse> {
        const usersRepository = getRepository(User);

        const user = await usersRepository.findOne({
            where: { email }
        });

        if (!user) {
            throw new Error("E-mail ou senha incorretos.");
        }

        const passwordMatched = await compare(password, user.password);

        if (!passwordMatched) {
            throw new Error("E-mail ou senha incorretos.");
        }

        const { secret, expiresIn } = auth.jwt;

        const token = sign({},
            secret,
            {
                subject: user.id.toString(),
                expiresIn: expiresIn
            }
        );

        return {
            user,
            token
        };
    }
}

export default AuthenticateUserService;