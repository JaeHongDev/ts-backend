const EXTENSION = __filename.substr(-2);
if (EXTENSION === "js") require("source-map-support").install();

import fs from "fs";
import path from "path";
import express from "express";

const router = express.Router();
const indexJs = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== indexJs &&
      [".route.js", ".route.ts"].includes(file.slice(-9))
  )
  .forEach(async (routeFile) => {
    const route = await import(`./${routeFile}`);
    router.use(`/${routeFile.split(".")[0]}`, route.default.open());
  });

export default router;
