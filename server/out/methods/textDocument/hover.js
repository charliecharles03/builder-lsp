"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hover = exports.wordUnderCursor = exports.documents = void 0;
const log_1 = require("../../log");
exports.documents = new Map();
const wordUnderCursor = (uri, position) => {
    const document = exports.documents.get(uri);
    if (!document) {
        return null;
    }
    const lines = document.split("\n");
    const line = lines[position.line];
    const start = line.lastIndexOf(" ", position.character) + 1;
    const end = line.indexOf(" ", position.character);
    if (end === -1) {
        return {
            text: line.slice(start),
            range: {
                start: { line: position.line, character: start },
                end: { line: position.line, character: line.length },
            },
        };
    }
    return {
        text: line.slice(start, end),
        range: {
            start: { line: position.line, character: start },
            end: { line: position.line, character: end },
        },
    };
};
exports.wordUnderCursor = wordUnderCursor;
const hover = (message) => {
    log_1.default.write("hover being triggered");
};
exports.hover = hover;
/*
export const hover = (message: RequestMessage): Hover | null => {
  const params = message.params as any;
  log.write(`writing parms ${params}`);
  const currentWord = wordUnderCursor(params.textDocument.uri, params.position);

  if (!currentWord) {
    return null;
  }

  const rawDefinition = spawnSync("dict", [currentWord.text, "-d", "wn"], {
    encoding: "utf-8",
  })
    .stdout.trim()
    .split("\n");

  const value =
    `${currentWord.text}\n${"-".repeat(currentWord.text.length)}\n\n` +
    rawDefinition
      .splice(5)
      .map((line) => line.replace("      ", ""))
      .map((line) => (line.startsWith(" ") ? line : "\n" + line))
      .join("\n")
      .trim();

  return {
    contents: {
      kind: "markdown",
      value,
    },
    range: currentWord.range,
  };
};

*/
//# sourceMappingURL=hover.js.map