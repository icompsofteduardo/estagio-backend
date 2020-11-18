import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    OneToOne,
    JoinColumn
} from 'typeorm';
import Photo from './Photos';

@Entity('vehicles')
export default class Vehicle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    model: string;

    @Column()
    brand: string;

    @Column()
    plate: string;

    @Column({ name: "daily_value" })
    dailyValue: number;

    @Column()
    situation: boolean;

    @OneToOne(() => Photo)
    @JoinColumn()
    photo: Photo;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}