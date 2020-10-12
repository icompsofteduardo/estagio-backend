import { EntityRepository, Repository } from "typeorm";

import Rent from "../models/Rent";

@EntityRepository(Rent)
class RentsRepository extends Repository<Rent>{ }

export default RentsRepository;