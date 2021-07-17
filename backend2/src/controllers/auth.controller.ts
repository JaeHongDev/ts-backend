import express from "express";
import { ResponseUtils } from "../utils/responseUtils";
export namespace AuthController {
  export function login(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    return ResponseUtils.sendData({ data: { token: true } }, res);
  }
}
