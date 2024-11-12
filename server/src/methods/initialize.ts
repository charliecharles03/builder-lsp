import { RequestMessage } from "../server";

//server capabilities are unknown as of now will try to list them out later
type ServerCapabilities  = Record<string,unknown>;

interface InitializeResult{
    capabilities: ServerCapabilities;

    serverInfo?: {
        name: string;
        version?: string;
    };
}

export const initialize = (message : RequestMessage) : InitializeResult => {
    return {
        capabilities:{completionProvider:{},hoverProvider:true},
        serverInfo:{
            name: "lsp-from-scratch",
            version: "0.0.1",
        }
    }
};
