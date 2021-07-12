import { generateKey } from "crypto";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Generated, //getter
} from "typeorm";

@Entity()
export class User {
  @Column()
  @Generated("uuid")
  uuid!: string;

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  email!: string;

  @Column()
  password!: string;

  @CreateDateColumn()
  createAt!: Date;

  @CreateDateColumn()
  updateAt!: Date;
}
