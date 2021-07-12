import { createConnection } from "typeorm";
import { Configuration } from "../Configuration";
import { SGlobal } from "../SGlobal";

import { userSeed } from "./user.seed";

async function main() {
  if (process.argv[2]) {
    SGlobal.setMode(process.argv[2].toUpperCase() as typeof SGlobal.mode);
  }

  console.log("create databases")
  await createConnection(Configuration.getSeeding());

  await new userSeed().seed(); //create user seed
}

main();
