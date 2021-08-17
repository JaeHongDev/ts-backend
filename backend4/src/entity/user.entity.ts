import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReadMyBook } from "./readMyBook.entity";
import { UserCommunity } from "./userCommunity.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  //   nameLast
  // nameFirst
  // email
  // password
  // createdAt
  // updateAt

  @Column("varchar")
  nameFirst!: string;
  @Column("varchar")
  nameLast!: string;

  @Column("varchar")
  email!: string;

  @Column("varchar")
  password!: string;

  @Column("datetime")
  createdAt!: Date;

  @Column("dateTime")
  updateAt!: Date;

  @OneToMany(() => ReadMyBook, (table) => table.users)
  readMyBooks!: ReadMyBook[];

  @OneToMany(() => UserCommunity, (userCommunity) => userCommunity.users)
  userCommunities!: UserCommunity[];
}
