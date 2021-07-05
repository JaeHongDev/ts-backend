"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Bakend_1 = require("../Bakend");
function main() {
    var backend = new Bakend_1.Backend();
    backend.open();
    global.process.on("uncaughtException", function () {
        console.log("err");
    });
}
main();
//# sourceMappingURL=server.js.map