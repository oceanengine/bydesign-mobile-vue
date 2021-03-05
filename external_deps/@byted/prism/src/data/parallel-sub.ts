import {
  MESSAGE_TYPE_HANDLER_MAP,
  MessageTypeHandlerMap,
  MessageTypeParamsMap,
  MessageTypeResultMap,
} from "./handlers";

async function messageHandler<T extends keyof MessageTypeHandlerMap>(
  messageParams: MessageTypeParamsMap<T>
): Promise<void> {
  const { type, params } = messageParams;
  const result = (await (MESSAGE_TYPE_HANDLER_MAP[type] as (
    ...args: any
  ) => any)(...params)) as MessageTypeResultMap<T>["result"];
  const messageResult: MessageTypeResultMap<T> = {
    type,
    result,
  };
  process.send?.(messageResult);
}

process.addListener("message", messageHandler);

export {};
