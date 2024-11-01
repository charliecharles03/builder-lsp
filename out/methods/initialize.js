"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const initialize = (message) => {
    return {
        capabilities: {
            completionProvider: {},
            textDocumentSync: 1,
            diagnosticProvider: {
                interFileDependencies: false,
                workspaceDiagnostics: false,
            },
            codeActionProvider: true,
            hoverProvider: true,
        },
        serverInfo: {
            name: "lsp-from-scratch",
            version: "0.0.1",
        },
    };
};
exports.initialize = initialize;
//# sourceMappingURL=initialize.js.map