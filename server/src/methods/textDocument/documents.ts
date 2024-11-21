export type DocumentUri = string;
type DocumentBody = string;

interface TextDocumentIdentifier {
    uri: DocumentUri;
}

export interface VersionedTextDocumentIdentifier extends TextDocumentIdentifier {
    version : number
}

export type TextDocumentContentChangeEvent = {
	text: string;
};



export const documents = new Map<DocumentUri, DocumentBody>();
