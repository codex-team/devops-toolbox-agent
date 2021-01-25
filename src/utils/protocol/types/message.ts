/**
 * Message can contain any data at payload
 */
export type MessagePayload = Record<string, unknown>;

/**
 * Any client-server message should fit this structure
 */
export interface Message {
  /**
   * Any payload
   */
  payload: MessagePayload;
}
