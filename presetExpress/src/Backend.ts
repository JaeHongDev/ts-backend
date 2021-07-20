import express from "express";
import morgan from "morgan";

import indexRoute from "./Route/index";
export class Backend {
  private application_?: express.Express;

  public open(port: number) {
    this.application_ = express();
    this.application_.use(morgan("dev"));
    this.application_.use(express.json());
    this.application_.use(express.urlencoded({ extended: true }));

    this.application_.use("/", indexRoute);

    this.application_.listen(port);
    return this.application_;
  }
}
