import express from "express";

class AuthRoute {
  private router = express.Router();
  public routeName = "/auth";

  public set(): express.Router {
    this.router.get("/login", (_, res) => {
      res.send({ data: "login" });
    });

    this.router.post("/join", (req, res) => {
      console.log(req.body)
      res.send({ data:  "join" });
    });

    return this.router;
  }
}

export default new AuthRoute();



// join 


// login

// authroization
