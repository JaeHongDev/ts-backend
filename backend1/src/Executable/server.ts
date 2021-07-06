//import {Sequelize} from "sequelize";
import { Backend } from "../Bakend";

function main() {
  // Database setting
  //const sequelize = new Sequelize("mysql://root:root@localhost:3306/test");


  // Express server
  const backend = new Backend();
  backend.open();

  // global error handle
  global.process.on("uncaughtException", () => {
    console.log("err");
  });
}

main();
