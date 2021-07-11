import express from "express";

export class userController {
  get(_: any, res?: express.Response, next: express.NextFunction) {
    try {
      return res?.json({ message: "get" });
    } catch (e) {
      next(e);
    }
  }
}
