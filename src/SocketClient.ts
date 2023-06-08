import { serializeUInt8 } from "paketto";
import { ClientStatus } from "./Enums/ClientStatus";
import { Protocol } from "./Enums/Protocol";
import { ITransport } from "./Transports/ITransport";
import { Server } from "./Server";

export class SocketClient {
  /**
   * The id of this client
   * @internal
   */
  private readonly _id: number;

  /**
   * The transport this client is using
   * @internal
   */
  private readonly _transport: ITransport;

  private _server: Server;

  get id() {
    return this._id;
  }

  get transport() {
    return this._transport;
  }

  /**
   * Status of this client. Do not modify this value.
   * @internal
   */
  status: ClientStatus = ClientStatus.CONNECTED;

  /**
   * Custom data associated with this client. You may set this to
   * anything.
   */
  data: unknown;

  onMessage: (event: string | number, data: unknown) => void = () => {};
  onClose: () => void = () => {};
  onError: () => void = () => {};

  /**
   * @internal
   */
  constructor(id: number, transport: ITransport, server: Server) {
    this._id = id;
    this._transport = transport;
    this._server = server;
  }

  /**
   * Disconnects this client
   */
  close() {
    if (this.status >= ClientStatus.CLOSING) return;
    this.status = ClientStatus.CLOSING;

    this._transport.close(this._id);
  }

  /**
   * Sends a message to this client
   * @param event Unique identifier for this event.
   *
   * It is best to use a string or number for this, but you can use
   * any type that can be serialized. Recommended type is uint8 (any number
   * between 0 and 255).
   *
   * @param data Data that will be sent to this client.
   */
  send(event: unknown, data: unknown) {
    if (this.status >= ClientStatus.CLOSING) return;

    let offset = serializeUInt8(this._server.buffer, Protocol.SC_Message);
    offset = this._server.paketto.serialize(this._server.buffer, event, offset);
    offset = this._server.paketto.serialize(this._server.buffer, data, offset);

    this._transport.send(this._id, this._server.buffer.subarray(0, offset));
  }
}
