import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('vehicles')
class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    model: string;

    @Column()
    brand: string;

    @Column()
    plate: string;

    @Column()
    dailyValue: number;

    @Column()
    situation: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    //photos
}

export default Vehicle;