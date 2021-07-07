"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
var EXTENSION = __filename.substr(-2);
if (EXTENSION === "js")
    require("source-map-support").install();
var Configuration = (function () {
    function Configuration() {
    }
    Object.defineProperty(Configuration, "DB_Config", {
        get: function () {
            return {
                type: "mysql",
                host: "localhost",
                port: 3306,
                username: "root",
                password: "root",
                database: "test",
                synchronize: true,
                dropSchema: true,
                bigNumberStrings: false,
                dateStrings: false,
                entities: [__dirname + "/entity/**/*." + EXTENSION],
            };
        },
        enumerable: false,
        configurable: true
    });
    return Configuration;
}());
exports.Configuration = Configuration;
(function (Configuration) {
    Configuration.port = 4001;
})(Configuration = exports.Configuration || (exports.Configuration = {}));
exports.Configuration = Configuration;
//# sourceMappingURL=Configuration.js.map