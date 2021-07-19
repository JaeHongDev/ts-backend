const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js") require("source-map-support").install();

import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export class Configuration {
  public static getSeeding(): MysqlConnectionOptions {
    return {
      type: "mysql" as const,
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "TEST",

      logging: true,
      synchronize: true,
      bigNumberStrings: false,
      dateStrings: false,
      entities: [`${__dirname}/Entity/*.${EXTENSION}`],
    };
  }
}
