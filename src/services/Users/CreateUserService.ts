import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';

interface IRequest {
    name: string;
    email: string;
    password: string;
}

class CreateUserService {
    public async execute({ name, email, password }: IRequest): Promise<User> {
        const usersRepository = getRepository(User);
        const checkUserExists = await usersRepository.findOne({
            where: { email }
        });

        if (checkUserExists) {
            throw new Error('Email ja utilizado.');
        }

        const hashedPw = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            password: hashedPw
        });

        await usersRepository.save(user);

        return user;
    }
}

export default CreateUserService;