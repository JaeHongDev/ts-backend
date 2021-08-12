import { Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Book } from "./book.entity";
import { Community } from "./community.entity";

@Entity()
export class BookCommunity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Book, (book) => book.bookCommunities)
  books!: Book;

  @ManyToOne(() => Community, (community) => community.bookCommunities)
  communities!: Community;
}
