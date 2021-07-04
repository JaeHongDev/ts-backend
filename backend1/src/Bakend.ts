import express from "express";
import { Configuration } from "./Configuration";

export class Backend {
  private application_?: express.Application;

  constructor() {
    this.application_ = express();
  }

  public open(port: number = Configuration.port): void {
    this.application_?.listen(port, () => {
      console.log("server start");
    });
  }

  private parsetRoute():void {

  }
}
