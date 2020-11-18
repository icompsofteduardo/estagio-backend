import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    JoinColumn,
    ManyToOne,
    OneToMany,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

import Vehicle from './Vehicle';
import Client from './Client';
import User from './User';
import Photo from './Photos';

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

    @OneToMany(type => Photo, photo => photo.rent)
    photos: Photo[];

    @Column({ name: "start_date" })
    startDate: Date;

    @Column({ name: "end_date" })
    endDate: Date;

    @Column({ name: "final_value" })
    finalValue: number;

    @Column()
    situation: boolean;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}