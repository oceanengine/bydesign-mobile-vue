import { init } from "./query";

export const MESSAGE_TYPE_HANDLER_MAP = {
  init,
} as const;

export type MessageTypeHandlerMap = typeof MESSAGE_TYPE_HANDLER_MAP;

export type MessageType = keyof MessageTypeHandlerMap;

export type MessageTypeParamsMap<T extends MessageType> = {
  type: T;
  params: Parameters<MessageTypeHandlerMap[T]>;
};

export type PromiseValueType<T> = T extends Promise<infer TValue> ? TValue : T;

export type MessageTypeResultMap<T extends MessageType> = {
  type: T;
  result: PromiseValueType<ReturnType<MessageTypeHandlerMap[T]>>;
};
