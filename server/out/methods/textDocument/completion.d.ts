import { RequestMessage } from "../../server";
type CompletionItem = {
    label: string;
};
interface CompletionList {
    isIncomplete: boolean;
    items: CompletionItem[];
}
export declare const completion: (message: RequestMessage) => CompletionList;
export {};
