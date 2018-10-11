import { BaseEntity, PrimaryGeneratedColumn, Column, Entity } from 'typeorm'


@Entity()
export class Response extends BaseEntity {
    @PrimaryGeneratedColumn()
    id?: number

    @Column({nullable:false})
    status: number 
    
    @Column({nullable:false})
    responseTime: number

  }
