import {
  createConnection,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

// user Entity
@Entity()
class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => ReadMyBook, (table) => table.users)
  readMyBooks!: ReadMyBook[];
}

// community entity
@Entity()
class Community {
  @PrimaryGeneratedColumn()
  id!: number;
}

//book entity
@Entity()
class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => ReadMyBook, (table) => table.)
  readMyBooks!: ReadMyBook[];
}

// ReadMyBook entity
@Entity()
class ReadMyBook {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.readMyBooks)
  users!: User[];

  @ManyToOne(() => Book, (book) => book.readMyBooks)
  books!: Book[]
}

// user_commnuty entity
class UserCommunity {

  @PrimaryGeneratedColumn()
  id!: number;

  
}


async function main() {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root",
    database: "TEST",
  });

  const data = await connection.query("show databases");
  console.log(data);
}

main();
