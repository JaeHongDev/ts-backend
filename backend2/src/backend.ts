import express from "express";
import { Server } from "http";
import createError from "http-errors";
import * as morgan from "morgan";

import { Configuration } from "./Configuration";
import router from "./routes";

export class Backend {
  private application_?: express.Express;
  private listenServer!: Server;
  private is_open: Boolean;
  constructor() {}
  public async open(): Promise<express.Express> {
    this.application_ = express();

    await this.setup(); //setting express options

    await this.setupRoute(); //setting routes

    //await this.setupError(); //setting error handler

    this.is_open = false;

    this.listenServer = this.application_.listen(Configuration.port);

    this.is_open = true;

    return this.application_;
  }

  public async close() {
    if (this.listenServer === undefined) {
      return;
    }
    console.log(this.listenServer);
    this.listenServer.close();
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

  private async setupRoute(): Promise<void> {
    this.application_?.use("/", router);
  }
  private async setupError(): Promise<void> {
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
    next();
  }

  private async handleError(
    err: createError.HttpError,
    _: any,
    res: express.Response
  ) {
    console.log(1);
    let apiError = err;

    if (!err.status) {
      apiError = createError(err);
    }
    // set locals, only providing error in development
    // res.locals.message = apiError.message;
    // res.locals.error = apiError;

    // render the error page
    return res.status(apiError.status).json({ message: apiError.message });
  }
}
