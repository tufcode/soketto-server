/**
 * Connection status of a NetworkClient
 */
export enum ClientStatus {
  /**
   * Client is connected to the server
   */
  CONNECTED,
  /**
   * Client is ready to send and receive messages
   */
  READY,
  /**
   * Client is disconnecting from the server
   */
  CLOSING,
  /**
   * Client is disconnected from the server
   */
  CLOSED,
}
