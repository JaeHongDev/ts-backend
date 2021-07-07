const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js") require("source-map-support").install();

import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

export class Configuration {
  public static get DB_Config(): MysqlConnectionOptions {
    return {
      type: "mysql" as const,
      host: "localhost",
      port: 3306,
      username: "root",
      password: "root",
      database: "test",

      synchronize: true,
      dropSchema: true,
      bigNumberStrings: false,
      dateStrings: false,
      entities: [`${__dirname}/entity/**/*.${EXTENSION}`],
    };
  }
}

export namespace Configuration {
  export const port = 4001;
}

// npm install mysql2
// npm install -g sequelize-cli
// npm install sequelize

/*
const path = require('path');

module.exports = {
  'config': path.resolve('configs', 'sequelize.js'),
  'models-path': path.resolve('.', 'models'),
  'seeders-path': path.resolve('.', 'seeders'),
  'migrations-path': path.resolve('.', 'migrations')
}

*/
