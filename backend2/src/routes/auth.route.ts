import express from "express";
import { AuthController } from "../controllers/auth.controller";

class authRoute {
  private router = express.Router();

  public open() {
    this.router.post("/login", AuthController.login);
    return this.router;
  }
}

export default new authRoute();
