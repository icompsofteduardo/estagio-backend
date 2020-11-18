import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';
import Photo from './Photos';

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

    @OneToOne(() => Photo)
    @JoinColumn()
    photo: Photo;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}