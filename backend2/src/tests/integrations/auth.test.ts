import superTest, { SuperAgentTest } from "supertest";
import randomString from "random-string";
import { Backend } from "../../backend";
import { userProvider } from "../../providers/user.provider";
import { userStruct } from "../../api/structurs/user.struct";

const backend = new Backend();
let request: SuperAgentTest;
describe("로그인 테스트", () => {
  let userData: userStruct.insertUser;

  beforeAll(async () => {
    request = superTest(await backend.open());
    userData = {
      email: randomString() + "@test.com",
      password: randomString(),
    };
    userProvider.store(userData);
  });

  test("실제 로그인 테스트 | 200", async () => {
    const response = await request.post("/auth/login").send({
      email: userData.email,
      password: userData.password,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.data.token).toBeTruthy();
    backend.close();
  });
});
