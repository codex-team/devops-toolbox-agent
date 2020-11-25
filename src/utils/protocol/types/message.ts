/**
 * Message can contain any data at payload
 */
export type MessagePayload = { [key: string]: any };

/**
 * Any client-server message should fit this structure
 */
export interface Message {
  /**
   * Any payload
   */
  payload: MessagePayload;
}
