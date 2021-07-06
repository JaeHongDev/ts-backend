import express from "express";

export class Router {
  private router = express.Router();

  public getRouter() {
    return this.router;
  }


}
