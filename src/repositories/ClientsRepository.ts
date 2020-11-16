import { EntityRepository, Repository } from "typeorm";

import Client from "../models/Client";

@EntityRepository(Client)
export default class ClientsRepository extends Repository<Client>{ }