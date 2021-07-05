import express from "express";

class userRouter {
  private router = express.Router();
  public routeName = "/user";
  public set(): express.Router {
    
    this.router.get("/profile", (_, res) => {
      res.send({ test: "data" });
    });
    return this.router;
  }
}

export default new userRouter();
