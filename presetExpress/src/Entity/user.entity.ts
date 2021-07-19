import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  OneToMany,
} from "typeorm";

import { DateTime } from "./datetime";
import { Todo } from "./todo.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: Number;

  @Column("varchar")
  @Generated("uuid")
  uuid!: string;

  @Column({ type: "varchar", unique: true })
  email!: string;

  @Column({ type: "varchar" })
  password!: string;

  @Column((_type) => DateTime)
  user!: DateTime;

  @OneToMany(() => Todo, (todo) => todo.user)
  todos!: Todo[];
}
