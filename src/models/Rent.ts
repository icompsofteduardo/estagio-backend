import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Vehicle from '../models/Vehicle'
import Client from '../models/Client'
import User from './User';


@Entity('rents')
class Rent {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Client, client => client.id)
    @JoinColumn()
    client: Client;

    @ManyToOne(type => Vehicle, vehicle => vehicle.id)
    @JoinColumn()
    vehicle: Vehicle;

    @ManyToOne(type => User, operator => operator.id)
    @JoinColumn()
    operator: User;

    @Column()
    startDate: Date;

    @Column()
    finalDate: Date;

    @Column('double')
    finalValue: number;

    @Column()
    situation: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Rent;