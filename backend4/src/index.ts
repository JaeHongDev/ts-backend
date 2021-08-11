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

  @OneToMany(() => UserCommunity, (userCommunity) => userCommunity.users)
  userCommunities!: UserCommunity[];
}

// community entity
@Entity()
class Community {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => UserCommunity, (userCommunity) => userCommunity.communities)
  userCommunities!: UserCommunity[];

  @OneToMany(() => BookCommunity, (bookCommunity) => bookCommunity.communities)
  bookCommunities!: BookCommunity[];
}

//book entity
@Entity()
class Book {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => ReadMyBook, (table) => table.books)
  readMyBooks!: ReadMyBook[];

  @OneToMany(() => BookCommunity, (bookCommunity) => bookCommunity.books)
  bookCommunities!: BookCommunity[];
}

// ReadMyBook entity
@Entity()
class ReadMyBook {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.readMyBooks)
  users!: User;

  @ManyToOne(() => Book, (book) => book.readMyBooks)
  books!: Book;
}

// user_commnuty entity
@Entity()
class UserCommunity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => User, (user) => user.id)
  users!: User;

  @ManyToOne(() => Community, (community) => community.id)
  communities!: Community;
}

@Entity()
class BookCommunity {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Book, (book) => book.bookCommunities)
  books!: Book;

  @ManyToOne(() => Community, (community) => community.bookCommunities)
  communities!: Community;
}

async function main() {
  const connection = await createConnection({
    type: "mysql",
    host: "localhost",
    port: 50001,
    username: "root",
    password: "root",
    database: "TEST",
    entities: [User, Community, Book, ReadMyBook, UserCommunity, BookCommunity],
    synchronize: true,
    dropSchema:true
  });

  const data = await connection.query("show databases");
  [User,Community, Book].forEach(
    async (entity: any) => {
      await connection
        .createQueryBuilder()
        .insert()
        .into(entity)
        .values({})
        .execute();
    }
  );
  
  const user = await connection
  .getRepository(User)
  .createQueryBuilder("user")
  .where("user.id = :id", { id: 1 })
  .getOne();

  
  const book = await connection
  .getRepository(Book)
  .createQueryBuilder("book")
  .where("book.id = :id", { id: 1 })
  .getOne();

  const community = await connection
  .getRepository(Community)
  .createQueryBuilder("community")
  .where("community.id = :id", { id: 1 })
  .getOne();

  await connection
  .createQueryBuilder()
  .insert()
  .into(ReadMyBook)
  .values({users:user, books:book})
  .execute();

  await connection
  .createQueryBuilder()
  .insert()
  .into(UserCommunity)
  .values({users:user, communities:community})
  .execute();

  await connection
  .createQueryBuilder()
  .insert()
  .into(BookCommunity)
  .values({communities:community, books:book})
  .execute();
  console.log(data);
}

main();


/*

  select * from user 
    inner join user_community 
      on user.id = user_community.usersId
    inner join community
      on user_community.communitiesId = community.id

*/