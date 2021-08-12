import { Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { BookCommunity } from "./bookCommunity.entity";
import { UserCommunity } from "./userCommunity.entity";

@Entity()
export class Community {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => UserCommunity, (userCommunity) => userCommunity.communities)
  userCommunities!: UserCommunity[];

  @OneToMany(() => BookCommunity, (bookCommunity) => bookCommunity.communities)
  bookCommunities!: BookCommunity[];
}