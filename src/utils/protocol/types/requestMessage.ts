import { Message } from './message';

/**
 * Message inited by the agent
 */
interface RequestMessage extends Message {
  /**
   * Type of message
   */
  type: string;
}

export default RequestMessage;
