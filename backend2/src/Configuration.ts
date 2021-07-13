const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js") require("source-map-support").install();

import dotenv from "dotenv";
dotenv.config();
import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";
import { SGlobal } from "./SGlobal";

export class Configuration {
  public static get(): MysqlConnectionOptions {
    return {
      type: "mysql" as const,
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: SGlobal.mode,

      logging: true,
      synchronize: true,
      bigNumberStrings: false,
      dateStrings: false,
      entities: [`${__dirname}/entity/*.${EXTENSION}`],
    };
  }
  // SEEDING
  public static getSeeding(): MysqlConnectionOptions {
    return {
      type: "mysql" as const,
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: SGlobal.mode,

      dropSchema: true,
      logging: true,
      synchronize: true,
      bigNumberStrings: false,
      dateStrings: false,
      entities: [`${__dirname}/entity/*.${EXTENSION}`],
    };
  }

  // Test
  public static getTesting(): MysqlConnectionOptions {
    return {
      type: "mysql" as const,
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "TEST",

      dropSchema: true,
      synchronize: true,
      bigNumberStrings: false,
      dateStrings: false,
      entities: [`${__dirname}/entity/*.${EXTENSION}`],
    };
  }
}

export namespace Configuration {
  export const port = process.env.PORT;
}
