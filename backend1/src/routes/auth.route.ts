import express from "express";
import {
  joinController,
  loginController,
  profileController,
} from "../controllers/auth.controllers";

class AuthRoute {
  private router = express.Router();
  public routeName = "/auth";

  public set(): express.Router {
    // post login
    this.router.post("/login", loginController);
    this.router.post("/join", joinController);
    this.router.get("/profile",profileController)
    return this.router; 
  }
}

export default new AuthRoute();

// join

// login

// authroization
