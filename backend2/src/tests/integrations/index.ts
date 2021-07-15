import supertest, { SuperAgentTest } from "supertest";
import { Backend } from "../../backend";

export class SupterTestRequest {
  private static request: SupterTestRequest;
  private request: SuperAgentTest;
  private constructor() {}

  private async createRequest() {
    return supertest(await new Backend().open);
  }
  public static getRequest(): SupterTestRequest {
    if (!SupterTestRequest.request) {
      SupterTestRequest.request = new SupterTestRequest();
    }
    return SupterTestRequest.request;
  }

  public getRequest() {
    return this.request;
  }
}

// 싱글톤 패턴 마무리 짓기