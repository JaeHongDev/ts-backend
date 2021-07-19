import { getRepository } from "typeorm";
import randomString from "random-string";

import { User } from "../../Entity/user.entity";

interface basicUser {
  email: string;
  password: string;
}

export namespace UserSeed {
  export async function seedingUser(createCount: number): Promise<void> {
    const userRepository = getRepository(User);
    const users: basicUser[] = [];

    for (let i = 0; i < createCount; i++) users.push(createUserData());
    await userRepository.save(users);
  }

  function createUserData(): basicUser {
    return {
      email: randomString() + "naver.com",
      password: randomString(),
    };
  }
}
