import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'


@Entity()
export class Flight extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    origin: string
    
    @Column()
    destination: string

    @Column()
    departure: string

    @Column()
    price: number
  }
