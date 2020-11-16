import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Vehicle from './Vehicle';
import Client from './Client';
import User from './User';


@Entity('rents')
export default class Rent {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(type => Client, client => client.id)
    @JoinColumn({ name: "client" })
    client: Client;

    @ManyToOne(type => Vehicle, vehicle => vehicle.id)
    @JoinColumn({ name: "vehicle" })
    vehicle: Vehicle;

    @ManyToOne(type => User, operator => operator.id)
    @JoinColumn({ name: "operator" })
    operator: User;

    @Column({ name: "start_date" })
    startDate: Date;

    @Column({ name: "end_date" })
    endDate: Date;

    @Column({ name: "final_value" })
    finalValue: number;

    @Column()
    situation: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}