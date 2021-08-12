import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Community } from "./community.entity";
import { User } from "./user.entity";

@Entity()
export class UserCommunity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.id)
  users!: User;

  @ManyToOne(() => Community, (community) => community.id)
  communities!: Community;
}