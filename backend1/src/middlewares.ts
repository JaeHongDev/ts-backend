import express from "express";
import { User } from "./entity/user/user";

export interface requestPropertyAddUserType extends express.Request {
  user: User;
}

export interface addUserType {
  user: {
    id: number;
    email: string;
    iat: number;
    exp: number;
  };
}

export class Middlewares {
  public autheithicateUser(
    req: requestPropertyAddUserType,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!req.user) {
      res.send({ error: "user did not exists" });
    }
    next();
  }
}
