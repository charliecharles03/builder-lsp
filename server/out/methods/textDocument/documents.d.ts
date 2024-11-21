export type DocumentUri = string;
interface TextDocumentIdentifier {
    uri: DocumentUri;
}
export interface VersionedTextDocumentIdentifier extends TextDocumentIdentifier {
    version: number;
}
export type TextDocumentContentChangeEvent = {
    text: string;
};
export declare const documents: Map<string, string>;
export {};
