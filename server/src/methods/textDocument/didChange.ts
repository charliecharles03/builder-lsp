import log from "../../log";
import { NotificationMessage } from "../../server";
import { VersionedTextDocumentIdentifier, TextDocumentContentChangeEvent, documents } from "./documents";


interface DidChangeTextDocumentParams {
    textDocument: VersionedTextDocumentIdentifier;
    contentChanges: TextDocumentContentChangeEvent[];
}

export const didChange = (message: NotificationMessage) : void => {
   const parms = message.params as DidChangeTextDocumentParams;
   documents.set(parms.textDocument.uri, parms.contentChanges[0].text);
}

