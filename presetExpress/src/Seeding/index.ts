
import { createConnection } from "typeorm";
import { Configuration } from "../Configuration";
import { TodoSeed } from "./Todo";
import { UserSeed } from "./User";

async function main() {
  await createConnection(Configuration.getSeeding());
  await UserSeed.seedingUser(3)
  TodoSeed.seedingTodo()
}

main();
