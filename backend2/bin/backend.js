"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Backend = void 0;
var express_1 = __importDefault(require("express"));
var http_errors_1 = __importDefault(require("http-errors"));
var morgan = __importStar(require("morgan"));
var Configuration_1 = require("./Configuration");
var routes_1 = __importDefault(require("./routes"));
var Backend = (function () {
    function Backend() {
    }
    Backend.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.application_ = express_1.default();
                        return [4, this.setup()];
                    case 1:
                        _a.sent();
                        this.application_.use("/", routes_1.default);
                        return [4, this.setupError()];
                    case 2:
                        _a.sent();
                        this.application_.listen(Configuration_1.Configuration.port, function () {
                            console.log("server listen port:" + Configuration_1.Configuration.port);
                        });
                        return [2];
                }
            });
        });
    };
    Backend.prototype.setup = function () {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_d) {
                (_a = this.application_) === null || _a === void 0 ? void 0 : _a.use(morgan.default("dev"));
                (_b = this.application_) === null || _b === void 0 ? void 0 : _b.use(express_1.default.json());
                (_c = this.application_) === null || _c === void 0 ? void 0 : _c.use(express_1.default.urlencoded({ extended: true }));
                return [2];
            });
        });
    };
    Backend.prototype.setupError = function () {
        var _a, _b;
        (_a = this.application_) === null || _a === void 0 ? void 0 : _a.use(this.createError);
        (_b = this.application_) === null || _b === void 0 ? void 0 : _b.use(this.handleError);
    };
    Backend.prototype.createError = function (_, __, next) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                next(http_errors_1.default(404));
                return [2];
            });
        });
    };
    Backend.prototype.handleError = function (err, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var apiError;
            return __generator(this, function (_a) {
                apiError = err;
                if (!err.status) {
                    apiError = http_errors_1.default(err);
                }
                res.locals.message = apiError.message;
                res.locals.error = process.env.NODE_ENV === "development" ? apiError : {};
                return [2, res.status(apiError.status).json({ message: apiError.message })];
            });
        });
    };
    return Backend;
}());
exports.Backend = Backend;
//# sourceMappingURL=backend.js.map