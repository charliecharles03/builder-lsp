"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.didChange = void 0;
const log_1 = require("../../log");
const didChange = (message) => {
    log_1.default.write("message in notificaiton ");
    log_1.default.write(message);
};
exports.didChange = didChange;
//# sourceMappingURL=didChange.js.map