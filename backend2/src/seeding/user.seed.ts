import { getConnection } from "typeorm";
import { User } from "../entity/user.entity";

export class userSeed {
  public async seed() {
    await getConnection()
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          email: "1234@naver.com",
          password: "1234",
        },
        {
          email: "12345@naver.com",
          password: "12345",
        },
      ])
      .execute();
  }
}
