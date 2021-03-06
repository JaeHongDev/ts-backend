import express from "express";
import { userController } from "../controllers/user.controller";
class userRoutes {
  private router = express.Router();
  private userController = new userController();
  public open() {
    // url GET: host/user/


    this.router.get("/", this.userController.get);
    this.router.get("/:uuid?", this.userController.findUserByUUID);
    return this.router;
  }
}

export default new userRoutes();
