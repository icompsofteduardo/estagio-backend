import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('clients')
export default class Client {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: "last_name" })
    firstName: string;

    @Column({ name: "first_name" })
    lastName: string;

    @Column()
    age: number;

    @Column()
    address: string;

    @Column()
    email: string;

    @Column({ name: "driver_license" })
    driverLicense: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //photo
}