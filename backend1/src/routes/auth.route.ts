import express from "express";
import {
  joinController,
  loginController,
} from "../controllers/auth.controllers";

class AuthRoute {
  private router = express.Router();
  public routeName = "/auth";

  public set(): express.Router {
    this.router.post("/login", loginController);
    this.router.post("/join", joinController);

    return this.router;
  }
}

export default new AuthRoute();

// join

// login

// authroization
