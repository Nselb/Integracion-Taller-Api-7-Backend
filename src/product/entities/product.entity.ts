import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn()
    id: number;
    @Column('varchar')
    name: string;
    @Column('int')
    quantity: number;
}
