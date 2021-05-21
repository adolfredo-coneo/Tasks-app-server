import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BaseEntity} from "typeorm";

@Entity()
export class Task extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    title: string;

    @Column()
    completed: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}