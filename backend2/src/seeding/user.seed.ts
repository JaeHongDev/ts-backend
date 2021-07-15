import { getConnection, getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export class userSeed {
  public async seed() {
    // await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(User)
    //   .values([
    //     {
    //       email: "1234@naver.com",
    //       password: "1234",
    //     },
    //     {
    //       email: "12345@naver.com",
    //       password: "12345",
    //     },
    //     {
    //       email: "1",
    //       password: "1",
    //     },
    //   ])
    //   .execute();

    // const userRepository = getRepository(User); // you can also get it via getConnection().getRepository() or getManager().getRepository()
    // const user = await userRepository.findOne(1);
    // user.name = "Umed";
    // await userRepository.save(user);

    const userRepo = getRepository(User);

    // userRepo
    //   .createQueryBuilder()
    //   .insert()
    //   .into(User)
    //   .values({ email: "3", password: "4" })
    //   .execute();
    const user = new User();
    user.email = "2";
    user.password = "3";
    await userRepo.save(user);
  }
}
