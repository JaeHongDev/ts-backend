import express from "express";
import { getConnection, getRepository } from "typeorm";
import { User } from "../entity/user.entity";

export class userController {
  async get(
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
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
  async findUserByUUID(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { uuid } = req.params;
    try {
      const user = await getRepository(User)
        .createQueryBuilder("user")
        .where("user.uuid = :uuid", { uuid })
        .getOne();
      return res.json(user);
    } catch (e) {
      next(e);
    }
  }
}
