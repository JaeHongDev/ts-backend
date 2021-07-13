import { Backend } from "../backend";
import "reflect-metadata";
import { createConnection } from "typeorm";
import { Configuration } from "../Configuration";
import { SGlobal } from "../SGlobal";

async function main() {
  // division server mode
  console.log(process.argv[2]);
  if (process.argv[2]) {
    SGlobal.setMode(process.argv[2].toUpperCase() as typeof SGlobal.mode);
  }

  console.log(`${SGlobal.mode} mode start`);
  // database connection
  await createConnection(Configuration.get());

  const backend = new Backend();
  await backend.open();
}

main();
