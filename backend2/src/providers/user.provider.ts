import { getConnection } from "typeorm";
import { userStruct } from "../api/structurs/user.struct";
import { User } from "../entity/user.entity";

export namespace userProvider {
  export async function store(data: userStruct.insertUser) {
    return getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values(data)
      .execute();
  }

  export async function all(): Promise<User[]> {
    return getConnection()
      .getRepository(User)
      .createQueryBuilder("user")
      .getMany();
  }

  export async function find(uuid: string): Promise<User | undefined> {
    return getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.uuid = :uuid", { uuid })
      .getOne();
  }

  export async function findById(id: string): Promise<User | undefined> {
    return getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .where("user.id = :id", { id })
      .getOne();
  }
}
