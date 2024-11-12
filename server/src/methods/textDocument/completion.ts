import { RequestMessage } from "../../server";

type CompletionItem = {
    label : string;
}

interface CompletionList {
    isIncomplete: boolean;
    items: CompletionItem[];
}


export const completion = (message : RequestMessage) : CompletionList => {
    return {
        isIncomplete: false,
        items: [{label: "TypeScripts"},{label:"LSP"},{label: "unLala"}]
    }
}
