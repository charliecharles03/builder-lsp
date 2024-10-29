"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completion = void 0;
const completion = (message) => {
    return {
        isIncomplete: false,
        items: [{ label: "TypeScripts" }, { label: "LSP" }, { label: "Lua" }]
    };
};
exports.completion = completion;
//# sourceMappingURL=completion.js.map