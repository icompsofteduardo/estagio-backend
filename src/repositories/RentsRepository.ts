import { EntityRepository, Repository } from "typeorm";

import Rent from "../models/Rent";

@EntityRepository(Rent)
export default class RentsRepository extends Repository<Rent>{ }
