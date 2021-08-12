import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReadMyBook } from "./readMyBook.entity";
import { UserCommunity } from "./userCommunity.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => ReadMyBook, (table) => table.users)
  readMyBooks!: ReadMyBook[];

  @OneToMany(() => UserCommunity, (userCommunity) => userCommunity.users)
  userCommunities!: UserCommunity[];
}