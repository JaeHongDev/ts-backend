import express from "express";
import createHttpError from "http-errors";
import httpStatus from "http-status";
import { userProvider } from "../providers/user.provider";
import { ResponseUtils } from "../utils/responseUtils";

export class userController {
  async get(_req: express.Request, res: express.Response) {
    try {
      const users = await userProvider.all();
      return ResponseUtils.sendData(users, res);
    } catch (e) {
      return;
    }
  }
  async findUserByUUID(req: express.Request, res: express.Response) {
    const { uuid } = req.params;
    try {
      const user = await userProvider.find(uuid);
      if (!user) {
        const error = createHttpError(
          httpStatus.NOT_FOUND,
          "사용자를 찾을 수 없습니다"
        );
        throw Error(error.toString());
      }
      return ResponseUtils.sendData(user, res);
    } catch (e) {
      return ResponseUtils.sendError(
        createHttpError(httpStatus.NOT_FOUND, "사용자를 찾을 수 없습니다."),
        res
      );
    }
  }
}
