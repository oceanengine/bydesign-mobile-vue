import { init } from "./query";
export declare const MESSAGE_TYPE_HANDLER_MAP: {
    readonly init: typeof init;
};
export declare type MessageTypeHandlerMap = typeof MESSAGE_TYPE_HANDLER_MAP;
export declare type MessageType = keyof MessageTypeHandlerMap;
export declare type MessageTypeParamsMap<T extends MessageType> = {
    type: T;
    params: Parameters<MessageTypeHandlerMap[T]>;
};
export declare type PromiseValueType<T> = T extends Promise<infer TValue> ? TValue : T;
export declare type MessageTypeResultMap<T extends MessageType> = {
    type: T;
    result: PromiseValueType<ReturnType<MessageTypeHandlerMap[T]>>;
};
//# sourceMappingURL=handlers.d.ts.map