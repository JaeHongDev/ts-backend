"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
var express_1 = __importDefault(require("express"));
var Configuration_1 = require("./Configuration");
var Backend = (function () {
    function Backend() {
        this.application_ = express_1.default();
    }
    Backend.prototype.open = function (port) {
        var _a;
        if (port === void 0) { port = Configuration_1.Configuration.port; }
        (_a = this.application_) === null || _a === void 0 ? void 0 : _a.listen(port, function () {
            console.log("server start");
        });
    };
    return Backend;
}());
exports.Backend = Backend;
(function () {
});
//# sourceMappingURL=Bakend.js.map