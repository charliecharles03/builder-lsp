import { RequestMessage } from "../server";
type ServerCapabilities = Record<string, unknown>;
interface InitializeResult {
    capabilities: ServerCapabilities;
    serverInfo?: {
        name: string;
        version?: string;
    };
}
export declare const initialize: (message: RequestMessage) => InitializeResult;
export {};
