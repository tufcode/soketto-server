import { PakettoInstance, paketto } from "paketto";
import { ClientStatus } from "./Enums/ClientStatus";
import { Protocol } from "./Enums/Protocol";
import { SocketClient } from "./SocketClient";
import { ITransport } from "./Transports/ITransport";
import { WebSocketTransport } from "./Transports/WebSocket/WebSocketTransport";

export class Server {
  /**
   * @internal
   */
  private _lastConnectionId = 1;

  /**
   * @internal
   */
  private readonly _buffer: Uint8Array;

  /**
   * @internal
   */
  private _paketto: PakettoInstance;

  get paketto() {
    return this._paketto;
  }

  /**
   * Gets the next connection ID.
   */
  get nextConnectionId() {
    return this._lastConnectionId++;
  }

  get buffer() {
    return this._buffer;
  }

  /**
   * @internal
   */
  private readonly _transports: Set<ITransport> = new Set();
  /**
   * @internal
   */
  private readonly _clients: Map<number, SocketClient> = new Map();

  /**
   * Returns a list of transports. This is a copy of the internal list, so
   * modifying it will not affect the server.
   */
  get transports() {
    return new Set(this._transports);
  }

  /**
   * Returns a list of clients. This is a copy of the internal list, so
   * modifying it will not affect the server.
   */
  get clients() {
    return new Map(this._clients);
  }

  /**
   * Called when a client connects to the server.
   * @param client The client that connected.
   * @event
   */
  onConnect?: (client: SocketClient) => void = () => {};

  /**
   * Creates a new server.
   * @param pakettoInstance The paketto instance to use. Defaults to a new
   * instance.
   * @param preallocateBytes The number of bytes to preallocate for the
   * packet buffer. Defaults to 1MB (1024 * 1024).
   * @param transports The transports to use. If none are provided, a
   * {@link WebSocketTransport} with port 3000 will be used.
   */
  constructor(
    pakettoInstance = paketto(),
    preallocateBytes = 1024 * 1024,
    ...transports: ITransport[]
  ) {
    this._paketto = pakettoInstance;
    this._buffer = new Uint8Array(preallocateBytes);
    if (transports.length === 0) {
      const transport = new WebSocketTransport();
      transport.server = this;
      this._transports.add(transport);
    } else {
      transports.forEach((transport) => {
        transport.server = this;
        this._transports.add(transport);
      });
    }
  }

  /**
   * Starts the server.
   */
  start() {
    this._transports.forEach((transport) => {
      transport.onConnect = (connectionId) => {
        this._onConnect(connectionId, transport);
      };
      transport.onDisconnect = this._onDisconnect.bind(this);
      transport.onMessage = this._onMessage.bind(this);
      transport.start();
    });
  }

  /**
   * Stops the server.
   */
  stop() {
    this._transports.forEach((transport) => {
      transport.stop();
    });
  }

  /**
   * Broadcasts a message to all connected clients.
   * @param event The event identifier.
   * @param data The data to send.
   */
  broadcast(event: unknown, data: unknown) {
    this._clients.forEach((client) => {
      client.send(event, data);
    });
  }

  /**
   * @internal
   */
  private _onConnect(connectionId: number, transport: ITransport) {
    const client = new SocketClient(connectionId, transport, this);
    this._clients.set(connectionId, client);

    client.status = ClientStatus.READY;
    this.onConnect(client);
  }

  /**
   * @internal
   */
  private _onDisconnect(connectionId: number) {
    const client = this._clients.get(connectionId);
    if (!client) throw new Error("Client disconnected but was not connected.");
    client.status = ClientStatus.CLOSED;
    client.onClose();
    this._clients.delete(connectionId);
  }

  /**
   * @internal
   */
  private _onMessage(connectionId: number, message: Uint8Array) {
    const client = this._clients.get(connectionId);
    if (!client) throw new Error("Message received from unknown client.");

    if (message.length === 0) {
      console.warn("Received empty packet.");
      client.close();
      return;
    }

    const packetId = <Protocol>message[0];
    let offset = 1;

    switch (packetId) {
      case Protocol.SC_Message:
        if (client.status !== ClientStatus.READY) {
          console.warn("Received message from client that is not ready.");
          client.close();
          break;
        }
        if (message.length < 2) {
          console.warn("Received message is too short.");
          client.close();
          break;
        }

        // Key
        const deserializedKey = this._paketto.deserialize(message, offset);
        offset = deserializedKey.offset;

        if (message.length < offset + 1) {
          console.warn("Received message is too short.");
          client.close();
          break;
        }

        // Value
        const deserializedValue = this._paketto.deserialize(message, offset);
        offset = deserializedValue.offset;

        // Call the client's onMessage handler
        client.onMessage(
          deserializedKey.value as string,
          deserializedValue.value as any
        );

        break;
      default:
        console.warn(`Received unknown packet ID: ${packetId}`);
        client.close();
        break;
    }
  }
}
