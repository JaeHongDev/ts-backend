import { v4 } from "uuid";

export namespace Utiluuid {
  export function uuid(): string {
    const tokens = v4().split("-");
    return tokens[2] + tokens[1] + tokens[0] + tokens[3] + tokens[4];
  }
}
