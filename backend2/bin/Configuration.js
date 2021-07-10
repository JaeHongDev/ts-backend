"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var Configuration = (function () {
    function Configuration() {
    }
    return Configuration;
}());
exports.Configuration = Configuration;
(function (Configuration) {
    Configuration.port = process.env.PORT;
})(Configuration = exports.Configuration || (exports.Configuration = {}));
exports.Configuration = Configuration;
//# sourceMappingURL=Configuration.js.map