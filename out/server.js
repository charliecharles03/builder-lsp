"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const completion_1 = require("../server/src/methods/textDocument/completion");
const log_1 = require("./log");
const initialize_1 = require("./methods/initialize");
;
const respond = (id, result) => {
    const message = JSON.stringify({ id, result });
    const messageLength = Buffer.byteLength(message, "utf-8");
    const header = `Content-Length: ${messageLength}\r\n\r\n`;
    log_1.default.write(header + message);
    process.stdout.write(header + message);
};
const methodLookup = {
    initialize: initialize_1.initialize,
    "textDocument/completion": completion_1.completion,
};
let buffer = "";
process.stdin.on("data", (chunk) => {
    buffer += chunk;
    while (true) {
        // Check for the Content-Length line
        const lengthMatch = buffer.match(/Content-Length: (\d+)\r\n/);
        if (!lengthMatch)
            break;
        const contentLength = parseInt(lengthMatch[1], 10);
        const messageStart = buffer.indexOf("\r\n\r\n") + 4;
        // Continue unless the full message is in the buffer
        if (buffer.length < messageStart + contentLength)
            break;
        const rawMessage = buffer.slice(messageStart, messageStart + contentLength);
        const message = JSON.parse(rawMessage);
        log_1.default.write({ id: message.id, method: message.method });
        const method = methodLookup[message.method];
        // Remove the processed message from the buffer
        buffer = buffer.slice(messageStart + contentLength);
    }
});
//# sourceMappingURL=server.js.map