import express from "express";
import createError from "http-errors";
import * as morgan from "morgan";

import { Configuration } from "./Configuration";

export class Backend {
  private application_?: express.Express;

  constructor() {}
  public async open(): Promise<void> {
    this.application_ = express();

    await this.setup(); //setting express options

    await this.setupError(); //setting error handler
    this.application_.listen(Configuration.port, () => {
      console.log(`server listen port:${Configuration.port}`);
    });
  }

  //******************************************************************
  // setting express options
  //
  //  error handler
  // use json
  // http post option use
  //******************************************************************
  private async setup(): Promise<void> {
    this.application_?.use(morgan.default("dev"));
    this.application_?.use(express.json());
    this.application_?.use(express.urlencoded({ extended: true }));
  }

  private setupError() {
    this.application_?.use(this.createError);

    this.application_?.use(this.handleError);
  }
  private async createError(
    _: any,
    __: any,
    //req: express.Request,
    //res: express.Response,
    next: express.NextFunction
  ) {
    next(createError(404));
  }
  private async handleError(
    err: createError.HttpError,
    req: express.Request,
    res: express.Response
  ) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV === "development" ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render("error");
  }
}
