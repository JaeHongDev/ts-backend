import "reflect-metadata";
import randomString from "random-string";
import { createConnection, getRepository } from "typeorm";
import { User } from "../../entity/user.entity";
import { Configuration } from "../../Configuration";

import {SuperTestRequest} from ".";

let request;
let user: User;

beforeAll(async () => {
  request = await SuperTestRequest.getRequest()
  await createConnection(Configuration.getTesting());

  // create user
  await getRepository(User).insert([
    {
      email: randomString() + "@test.com",
      password: randomString(),
    },
  ]);
  user = await (
    await getRepository(User).insert([
      {
        email: randomString() + "@test.com",
        password: randomString(),
      },
    ])
  ).generatedMaps[0];
});

describe("GET: v1/user", () => {
  test("전체 사용자 조회", async () => {
    let response = await request.get("/user");
    expect(response.body.length).toBeGreaterThan(1);
  });

  test("uuid로 조회", async () => {
    let response = await request.get(`/user/${user.uuid}`);
    console.log(response.body);
    expect(response.body.uuid).toBe(user.uuid);
  });

  test("잘못된 사용자로 조회", async () => {
    let response = await request.get(`/user/1`);
    expect(response.statusCode).toBe(404);
  });
});
