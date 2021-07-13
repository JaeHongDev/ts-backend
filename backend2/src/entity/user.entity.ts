import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Generated, //getter
} from "typeorm";

@Entity()
export class User {
  @Column("varchar")
  @Generated("uuid")
  uuid!: string;

  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", unique: true })
  email!: string;

  @Column("varchar")
  password!: string;

  @CreateDateColumn()
  createAt!: Date;

  @CreateDateColumn()
  updateAt!: Date;
}
