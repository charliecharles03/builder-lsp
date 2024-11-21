import log from "../../log";
import { NotificationMessage } from "../../server";

type DocumentUri = string;

interface TextDocumentIdentifier {
    uri: DocumentUri;
}

interface VersionedTextDocumentIdentifier extends TextDocumentIdentifier {
    version : number
}

export type TextDocumentContentChangeEvent = {
	text: string;
};




interface DidChangeTextDocumentParams {
    textDocument: VersionedTextDocumentIdentifier;
    contentChanges: TextDocumentContentChangeEvent[];
}

export const didChange = (message: NotificationMessage) : void => {
   log.write("message in notificaiton ") ;
   log.write(message);
}

