"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.didChange = void 0;
const documents_1 = require("./documents");
const didChange = (message) => {
    const parms = message.params;
    documents_1.documents.set(parms.textDocument.uri, parms.contentChanges[0].text);
};
exports.didChange = didChange;
//# sourceMappingURL=didChange.js.map