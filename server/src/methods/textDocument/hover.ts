import { RequestMessage } from "../../server";
import log from "../../log"
import { spawnSync } from "child_process";

//move this when working


export type DocumentUri = string;
type DocumentBody = string;

export interface TextDocumentIdentifier {
  uri: DocumentUri;
}

export interface VersionedTextDocumentIdentifier
  extends TextDocumentIdentifier {
  version: number;
}

export interface TextDocumentContentChangeEvent {
  text: string;
}

export const documents = new Map<DocumentUri, DocumentBody>();

type WordUnderCursor = {
  text: string;
  range: Range;
};

export const wordUnderCursor = (
  uri: DocumentUri,
  position: Position,
): WordUnderCursor | null => {
  const document = documents.get(uri);

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


//



type HoverParams = {
  textDocument: { uri: DocumentUri };
  position: Position;
};

interface Position {
	line: number;
	character: number;
}


interface Range {
	start: Position;
	end: Position;
}


type Hover = {
  contents: {
    kind: "markdown";
    value: string;
  };
  range: Range;
};


export const hover = (message : RequestMessage) =>{
    log.write("hover being triggered");
};
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

