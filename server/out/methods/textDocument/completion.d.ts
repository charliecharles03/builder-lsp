import { RequestMessage } from "../../server";
import { DocumentUri } from "./documents";
type CompletionItem = {
    label: string;
};
interface CompletionList {
    isIncomplete: boolean;
    items: CompletionItem[];
}
interface Position {
    line: number;
    character: number;
}
interface TextDocumentIdentifier {
    uri: DocumentUri;
}
interface TextDocumentPositionParams {
    textDocument: TextDocumentIdentifier;
    position: Position;
}
export interface CompletionParams extends TextDocumentPositionParams {
}
export declare const completion: (message: RequestMessage) => CompletionList | null;
export {};
