"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completion = void 0;
const log_1 = require("../../log");
const documents_1 = require("./documents");
const completion = (message) => {
    const params = message.params;
    const content = documents_1.documents.get(params.textDocument.uri);
    if (!content) {
        return null;
    }
    const currentLine = content?.split("\n")[params.position.line];
    const lineUntilCursor = currentLine.slice(0, params.position.character);
    const currentWord = lineUntilCursor.replace(/.*\W(.*?)/, "$1");
    log_1.default.write({
        completion: {
            currentLine,
            lineUntilCursor,
            currentWord,
        }
    });
    const words = ("TypeScripts\nmarkdown\nlua\nrust\nzig\ngo\n").toString().split("\n");
    log_1.default.write(words);
    const items = words.filter((word) => {
        return word.startsWith(currentWord);
    }).slice(0, 100)
        .map((word) => {
        return { label: word };
    });
    return {
        isIncomplete: items.length === 100,
        items,
    };
};
exports.completion = completion;
//# sourceMappingURL=completion.js.map