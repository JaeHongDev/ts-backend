"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var indexJs = path_1.default.basename(__filename);
fs_1.default.readdirSync(__dirname)
    .filter(function (file) {
    return file.indexOf(".") !== 0 &&
        file !== indexJs &&
        file.slice(-9) === ".route.js";
})
    .forEach(function (routeFile) {
    return router.use("/" + routeFile.split(".")[0], require("./" + routeFile).default);
});
exports.default = router;
//# sourceMappingURL=index.js.map