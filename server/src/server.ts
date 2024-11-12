import log from "./log"
import { initialize } from "./methods/initialize";
import { completion } from "./methods/textDocument/completion";
import { hover } from "./methods/textDocument/hover";

interface Message {
    jsonrpc: string;
}

export interface RequestMessage extends Message{
    id : number | string;
    method: string;
    params?: object [];
}


type RequestMethod = (message : RequestMessage) => unknown

const methodLookup : Record<string, RequestMethod> = {
    initialize,
    "textDocument/completion": completion,
    "textDocument/hover": hover,
};

const respond = (id : RequestMessage['id'], result : unknown) =>{
    log.write("respond being triggered");
    const message = JSON.stringify({id,result});
    const messageLength = Buffer.byteLength(message,"utf8");
    const header = `Content-Length: ${messageLength}\r\n\r\n`;

    log.write(header+message);
    process.stdout.write(header+message);
}

let buffer = "";
process.stdin.on ('data',(chunk)=>{
    buffer += chunk;
    while(true){
        const lengthMatch = buffer.match(/Content-Length: (\d+)\r\n/);
        if(!lengthMatch) break;
        log.write("matching lengthMatch");
        const contentLength = parseInt(lengthMatch[1],10);
        const messageStart = buffer.indexOf("\r\n\r\n")+4;

        if(buffer.length < messageStart + contentLength) break;

        const rawMessage = buffer.slice(messageStart,messageStart+contentLength);
        const message = JSON.parse(rawMessage);
        log.write({id:message.id,method:message.method})

        const method = methodLookup[message.method] ;
        if(method){
            log.write(`method that is being requestion ${method}`);
            respond(message.id,method(message));
        }
        
        buffer = buffer.slice(messageStart+contentLength);
    }
})


