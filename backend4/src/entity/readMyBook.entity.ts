import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.entity";
import { User } from "./user.entity";

@Entity()
export class ReadMyBook {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.readMyBooks)
  users!: User;

  @ManyToOne(() => Book, (book) => book.readMyBooks)
  books!: Book;
}