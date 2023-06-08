import { Server } from "../Server";

export interface ITransport {
  /**
   * The server this transport is attached to. This is set by the server
   * when the transport is added.
   */
  server: Server;

  /**
   * Should be called when a new connection is established.
   * @param connectionId The ID of the connection.
   */
  onConnect: (connectionId: number) => void;
  /**
   * Should be called when a connection is closed.
   * @param connectionId The ID of the connection.
   */
  onDisconnect: (connectionId: number) => void;
  /**
   * Should be called when a message is received.
   * @param connectionId The ID of the connection.
   * @param message The message received.
   */
  onMessage: (connectionId: number, message: Uint8Array) => void;

  /**
   * Sends a message to a connection.
   * @param connectionId The ID of the connection.
   * @param message The message to send.
   */
  send(connectionId: number, message: Uint8Array): void;
  /**
   * Closes a connection.
   * @param connectionId The ID of the connection.
   */
  close(connectionId: number): void;

  /**
   * Starts the transport.
   */
  start(): void;
  /**
   * Stops the transport.
   */
  stop(): void;

  /**
   * Gets the IDs of all clients connected to this transport.
   */
  getConnections(): number[];
}
