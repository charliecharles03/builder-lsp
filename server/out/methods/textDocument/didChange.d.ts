import { NotificationMessage } from "../../server";
export type TextDocumentContentChangeEvent = {
    text: string;
};
export declare const didChange: (message: NotificationMessage) => void;
