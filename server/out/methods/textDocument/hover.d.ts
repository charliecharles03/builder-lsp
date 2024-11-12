import { RequestMessage } from "../../server";
export type DocumentUri = string;
export interface TextDocumentIdentifier {
    uri: DocumentUri;
}
export interface VersionedTextDocumentIdentifier extends TextDocumentIdentifier {
    version: number;
}
export interface TextDocumentContentChangeEvent {
    text: string;
}
export declare const documents: Map<string, string>;
type WordUnderCursor = {
    text: string;
    range: Range;
};
export declare const wordUnderCursor: (uri: DocumentUri, position: Position) => WordUnderCursor | null;
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
export declare const hover: (message: RequestMessage) => Hover | null;
export {};
