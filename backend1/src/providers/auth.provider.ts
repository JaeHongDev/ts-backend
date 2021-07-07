import { getConnection } from "typeorm";
import { User } from "../entity/user/user";

export class AuthProvider {
  // join
  public async createNewUser(email: string, password: string) {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({ email, password })
      .execute();
  }

  // login

  public async findUserByEmail(email: string): Promise<User | undefined> {
    return getConnection()
      .getRepository(User)
      .createQueryBuilder("user")
      .where("user.email = :email", { email })
      .getOne();
  }
}
