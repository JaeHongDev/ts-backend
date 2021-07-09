import express from "express";
import { User } from "./entity/user/user";

export interface requestPropertyAddUserType extends express.Request {
  user?: User;
}

export class Middlewares {
  public autheithicateUser(
    req: requestPropertyAddUserType,
    _:any,
    next: express.NextFunction
  ) {
    if (!req.user) {
      throw Error("user did not exists");
    }
    next();
  }
}
