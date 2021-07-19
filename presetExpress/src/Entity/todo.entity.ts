import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id!: string;

  @ManyToOne((_type) => User, user=> user.id)
  user!: User;
}
