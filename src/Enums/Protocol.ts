/**
 * Specifies packet identifiers.
 *
 * S = Server -> Client
 * C = Client -> Server
 * SC = Server <-> Client
 *
 * @internal
 */
export enum Protocol {
  SC_Message = 10,

  S_CloseReason = 51,
}
