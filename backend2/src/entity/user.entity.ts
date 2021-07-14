import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  Generated,
  BeforeInsert,
  AfterInsert, //getter
} from "typeorm";

import bcrypt from "bcrypt";

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

  
  @BeforeInsert()
  async changePassword(): Promise<void> {
    console.log("cheeck")
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
}
