import request from "supertest";
import randomString from "random-String";
import { Backend } from "../../backend";
import { getConnection } from "typeorm";
import { User } from "../../entity/user.entity";

const backend = new Backend();

let user;

beforeAll(async () => {
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
      {
        email: "1",
        password: "1",
      },
    ])
    .execute();

  user = await getConnection()
    .createQueryBuilder()
    .insert()
    .into(User)
    .values([
      {
        email: randomString() + "@test.com",
        password: randomString() + "test.com",
      },
    ]);
    
    
});
