import express from "express";
import {
  joinController,
  loginController,
  profileController,
} from "../controllers/auth.controllers";
import { Middlewares } from "../middlewares";

class AuthRoute extends Middlewares {
  private router = express.Router();
  public routeName = "/auth";

  constructor() {
    super();
  }
  public set(): express.Router {
    // post login
    this.router.post("/login", loginController);
    this.router.post("/join", joinController);
    this.router.get("/profile", this.autheithicateUser, profileController);

    return this.router;
  }
}

export default new AuthRoute();

// join

// login

// authroization
