import { Backend } from "../backend";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Configuration } from "../Configuration";
import { SGlobal } from "../SGlobal";
import { Utiluuid } from "../utils/uuid";

async function main() {
  // division server mode
  if (process.argv[2]) {
    SGlobal.setMode(process.argv[2].toUpperCase() as typeof SGlobal.mode);
  }

  // database connection
  await createConnection(Configuration.get());

  console.log(Utiluuid.uuid())

  const backend = new Backend();
  await backend.open();
}

main();
