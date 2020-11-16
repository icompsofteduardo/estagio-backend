import { EntityRepository, Repository } from "typeorm";

import Vehicle from "../models/Vehicle";

@EntityRepository(Vehicle)
export default class VehiclesRepository extends Repository<Vehicle> { }