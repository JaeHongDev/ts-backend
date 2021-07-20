import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column("varchar")
  text!: string;

  @Column("bool")
  checked!: boolean;

  @ManyToOne((_type) => User, (user) => user.id,{onDelete:'CASCADE'})
  user!: User;
}
