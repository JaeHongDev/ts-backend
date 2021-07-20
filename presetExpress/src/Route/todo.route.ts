import express from "express";

 class TodoRoute {
  public open() {
    const router = express.Router();
    router.use("/", (req, res, next) => {
      res.send({ data: 1 });
    });

    return router;
  }
}

export default new TodoRoute()