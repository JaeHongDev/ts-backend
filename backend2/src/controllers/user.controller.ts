import express from "express";
import { getConnection } from "typeorm";
import { User } from "../entity/user.entity";

export class userController {
  async get(_: any, res?: express.Response, next: express.NextFunction) {
    let error = "";
    try {
      const users = await getConnection()
        .getRepository(User)
        .createQueryBuilder("user")
        .getMany();
      return res?.json(users);
    } catch (e) {
      next(error);
      error = e;
    }
  }
}
