import "reflect-metadata";
import { createConnection } from "typeorm";
import { Backend } from "../Bakend";
import { Configuration } from "../Configuration";

async function main() {
  // type orm connection
  await createConnection(Configuration.DB_Config);

  // Express serverasync
  const backend = new Backend();
  backend.open();

  // global error handle
  global.process.on("uncaughtException", () => {
    console.log("err");
  });
}

main();
