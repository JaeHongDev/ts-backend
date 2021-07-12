"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
var EXTENSION = __filename.substr(-2);
if (EXTENSION === "js")
    require("source-map-support").install();
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var SGlobal_1 = require("./SGlobal");
var Configuration = (function () {
    function Configuration() {
    }
    Configuration.get = function () {
        return {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: SGlobal_1.SGlobal.mode,
            logging: true,
            synchronize: true,
            bigNumberStrings: false,
            dateStrings: false,
            entities: [__dirname + "/entity/*." + EXTENSION],
        };
    };
    Configuration.getSeeding = function () {
        return {
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "root",
            database: SGlobal_1.SGlobal.mode,
            dropSchema: true,
            logging: true,
            synchronize: true,
            bigNumberStrings: false,
            dateStrings: false,
            entities: [__dirname + "/entity/*." + EXTENSION],
        };
    };
    return Configuration;
}());
exports.Configuration = Configuration;
(function (Configuration) {
    Configuration.port = process.env.PORT;
})(Configuration = exports.Configuration || (exports.Configuration = {}));
exports.Configuration = Configuration;
//# sourceMappingURL=Configuration.js.map