import * as uWS from "uWebSockets.js";
import { ITransport } from "../ITransport";
import { Server } from "../../Server";

export class WebSocketTransport implements ITransport {
  server: Server;

  /**
   * @internal
   */
  private _app: uWS.TemplatedApp;
  /**
   * @internal
   */
  private _clients: Map<number, uWS.WebSocket>;
  /**
   * @internal
   */
  private _ids: Map<uWS.WebSocket, number>;
  /**
   * @internal
   */
  private _listen_socket: uWS.us_listen_socket;
  /**
   * @internal
   */
  private _port = 3000;

  get port() {
    return this._port;
  }

  set port(port: number) {
    if (this._listen_socket) {
      throw new Error("Cannot change port while listening.");
    }
    this._port = port;
  }

  onConnect: (connectionId: number) => void;
  onDisconnect: (connectionId: number) => void;
  onMessage: (connectionId: number, message: Uint8Array) => void;

  constructor(
    maxPayloadLength = 2 * 1024 * 1024,
    idleTimeout = 32,
    port = 3000
  ) {
    this._clients = new Map();
    this._ids = new Map();
    this._port = port;

    this._app = uWS
      ./*SSL*/ App({})
      .ws("/", {
        /* Options */
        compression: uWS.SHARED_COMPRESSOR,
        maxPayloadLength,
        idleTimeout,
        /* Handlers */
        open: (ws) => {
          const connectionId = this.server.nextConnectionId;
          this._clients.set(connectionId, ws);
          this._ids.set(ws, connectionId);
          this.onConnect(connectionId);
        },
        message: (ws, message, isBinary) => {
          const connectionId = this._ids.get(ws);
          if (connectionId === undefined)
            throw new Error("Message from unknown connection?");

          if (!isBinary) {
            console.warn(
              "Received non-binary message from client " + connectionId
            );
            return;
          }

          this.onMessage(connectionId, new Uint8Array(message));
        },
        drain: (ws) => {
          // #TODO: HANDLE BACKPRESSURE
          console.log("WebSocket backpressure: " + ws.getBufferedAmount());
        },
        close: (ws, code) => {
          const connectionId = this._ids.get(ws);
          if (connectionId === undefined)
            throw new Error("Closing unknown connection?");

          this.onDisconnect(connectionId);
          this._clients.delete(connectionId);
          this._ids.delete(ws);
        },
      })
      .any("/*", (res, req) => {
        res.end("[connect.js] Server, Transport: uWebSockets.js");
      });
  }

  send(connectionId: number, message: Uint8Array): void {
    this._clients.get(connectionId)?.send(message, true);
  }

  close(connectionId: number): void {
    this._clients.get(connectionId)?.close();
  }

  start(): void {
    this._app.listen(this._port, (token: uWS.us_listen_socket) => {
      if (!token) {
        throw new Error("Failed to listen to port " + this._port);
      }
      this._listen_socket = token;
    });
  }

  stop(): void {
    uWS.us_listen_socket_close(this._listen_socket);
    this._listen_socket = null;
    this._clients.clear();
    this._ids.clear();
  }

  getConnections(): number[] {
    return Array.from(this._clients.keys());
  }
}
