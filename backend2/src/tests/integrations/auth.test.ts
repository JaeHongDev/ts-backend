import randomString from "random-string";

import { userProvider } from "../../providers/user.provider";
import { userStruct } from "../../api/structurs/user.struct";

import { SuperTestRequest } from ".";
import { createConnection } from "typeorm";
import { Configuration } from "../../Configuration";

let request;
describe("로그인 테스트", () => {
  let userData: userStruct.insertUser;

  beforeAll(async () => {
    request = await SuperTestRequest.getRequest();
    await createConnection(Configuration.getTesting());

    userData = {
      email: randomString() + "@test.com",
      password: randomString(),
    };

    await userProvider.store(userData);
  });

  test("실제 로그인 테스트 | 200", async () => {
    const response = await request.post("/auth/login").send({
      email: userData.email,
      password: userData.password,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.data.token).toBeTruthy();
  });
});
