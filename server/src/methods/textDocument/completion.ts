import log from "../../log";
import { RequestMessage } from "../../server";
import { documents, DocumentUri } from "./documents";

type CompletionItem = {
    label : string;
}

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

export interface CompletionParams extends TextDocumentPositionParams{}


export const completion = (message : RequestMessage) : CompletionList | null => {

    const params = message.params as CompletionParams;
    const content = documents.get(params.textDocument.uri);
    if(!content) {
        return null;
    }
    const currentLine = content?.split("\n")[params.position.line];
    const lineUntilCursor = currentLine.slice(0,params.position.character);
    const currentWord = lineUntilCursor.replace(/.*\W(.*?)/,"$1");

    log.write({
        completion:{
            currentLine,
            lineUntilCursor,
            currentWord,
        }
    })
    const words = ("TypeScripts\nmarkdown\nlua\nrust\nzig\ngo\n").toString().split("\n") ;
    log.write(words);
    const items = words.filter((word)=>{
        return word.startsWith(currentWord);
    }).slice(0,100)
    .map((word)=>{
        return {label: word};
    })

    return {
        isIncomplete: items.length === 100,
        items,
    }
}
