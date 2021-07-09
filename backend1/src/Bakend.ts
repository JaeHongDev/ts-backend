import express from "express";
import fs from "fs";

import { Configuration } from "./Configuration";

export class Backend {
  private application_?: express.Application;

  constructor() {
    this.application_ = express();
    this.parsetRoute();
    this.jsonEncoding();
  }

  public setApplication() {
    return this.application_;
  }

  public open(port: number = Configuration.port): void {
    this.application_?.listen(port, () => {
      console.log("server start");
    });
  }

  // auto import route file
  private async parsetRoute() {
    fs.readdirSync(__dirname + "/routes")
      .filter(
        (file) => file.indexOf(".") !== 0 && file.slice(-9) === ".route.js"
      )
      .forEach(async (routeFile) => {
        const getRoute = await import(`./routes/${routeFile}`);
        this.application_?.use(
          getRoute.default.routeName,
          getRoute.default.set()
        );
      });
  }

  // json encode
  private jsonEncoding() {
    this.application_?.use(express.json());
    
  }


  // handle application error
}

