import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Generated,
  OneToMany,
  JoinColumn,
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

  @OneToMany(() => Todo, (todo) => todo.user, { cascade: true })
  @JoinColumn()
  todos!: Todo[];
}
