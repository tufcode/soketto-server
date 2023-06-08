# Interface: ITransport

## Implemented by

- [`WebSocketTransport`](../classes/WebSocketTransport.md)

## Table of contents

### Properties

- [onConnect](ITransport.md#onconnect)
- [onDisconnect](ITransport.md#ondisconnect)
- [onMessage](ITransport.md#onmessage)
- [server](ITransport.md#server)

### Methods

- [close](ITransport.md#close)
- [getConnections](ITransport.md#getconnections)
- [send](ITransport.md#send)
- [start](ITransport.md#start)
- [stop](ITransport.md#stop)

## Properties

### onConnect

• **onConnect**: (`connectionId`: `number`) => `void`

#### Type declaration

▸ (`connectionId`): `void`

Should be called when a new connection is established.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connectionId` | `number` | The ID of the connection. |

##### Returns

`void`

#### Defined in

[Transports/ITransport.ts:14](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L14)

___

### onDisconnect

• **onDisconnect**: (`connectionId`: `number`) => `void`

#### Type declaration

▸ (`connectionId`): `void`

Should be called when a connection is closed.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connectionId` | `number` | The ID of the connection. |

##### Returns

`void`

#### Defined in

[Transports/ITransport.ts:19](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L19)

___

### onMessage

• **onMessage**: (`connectionId`: `number`, `message`: `Uint8Array`) => `void`

#### Type declaration

▸ (`connectionId`, `message`): `void`

Should be called when a message is received.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connectionId` | `number` | The ID of the connection. |
| `message` | `Uint8Array` | The message received. |

##### Returns

`void`

#### Defined in

[Transports/ITransport.ts:25](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L25)

___

### server

• **server**: [`Server`](../classes/Server.md)

The server this transport is attached to. This is set by the server
when the transport is added.

#### Defined in

[Transports/ITransport.ts:8](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L8)

## Methods

### close

▸ **close**(`connectionId`): `void`

Closes a connection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connectionId` | `number` | The ID of the connection. |

#### Returns

`void`

#### Defined in

[Transports/ITransport.ts:37](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L37)

___

### getConnections

▸ **getConnections**(): `number`[]

Gets the IDs of all clients connected to this transport.

#### Returns

`number`[]

#### Defined in

[Transports/ITransport.ts:51](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L51)

___

### send

▸ **send**(`connectionId`, `message`): `void`

Sends a message to a connection.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `connectionId` | `number` | The ID of the connection. |
| `message` | `Uint8Array` | The message to send. |

#### Returns

`void`

#### Defined in

[Transports/ITransport.ts:32](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L32)

___

### start

▸ **start**(): `void`

Starts the transport.

#### Returns

`void`

#### Defined in

[Transports/ITransport.ts:42](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L42)

___

### stop

▸ **stop**(): `void`

Stops the transport.

#### Returns

`void`

#### Defined in

[Transports/ITransport.ts:46](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/ITransport.ts#L46)
