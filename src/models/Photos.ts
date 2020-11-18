import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne
} from 'typeorm';
import Rent from './Rent';

@Entity('photos')
export default class Photo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ref: string;

    @ManyToOne(type => Rent, rent => rent.photos)
    rent: Rent;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;
}