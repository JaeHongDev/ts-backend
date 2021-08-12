import { Entity, PrimaryGeneratedColumn ,OneToMany} from "typeorm";
import { BookCommunity } from "./bookCommunity.entity";
import { ReadMyBook } from "./readMyBook.entity";


@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => ReadMyBook, (table) => table.books)
  readMyBooks!: ReadMyBook[];

  @OneToMany(() => BookCommunity, (bookCommunity) => bookCommunity.books)
  bookCommunities!: BookCommunity[];
}
