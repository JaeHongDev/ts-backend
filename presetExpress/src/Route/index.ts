import fs from "fs";
import path from "path";

import express from "express";

const router = express.Router();
const indexFile = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== indexFile &&
      [".route.js", ".route.ts"].includes(file.slice(-9))
  )
  .forEach(async (routeFile) => {
    const file = await import(`./todo.route`);
    router.use(`/${routeFile.split(".")[0]}`, file.default.open());
  });

export default router;
