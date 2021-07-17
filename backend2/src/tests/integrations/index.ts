import supertest from "supertest";
import { Backend } from "../../backend";

export class SuperTestRequest {
  private static instance: SuperTestRequest;
  private request: supertest.SuperTest<supertest.Test>;
  private backend: any;
  private constructor() {}

  public static async getRequest() {
    if (!SuperTestRequest.instance) {
      console.log("connect instance");
      SuperTestRequest.instance = new SuperTestRequest();
      SuperTestRequest.instance.request = supertest(await new Backend().open());
    }
    return SuperTestRequest.instance.request;
  }
}

// 싱글톤 패턴 마무리 짓기
