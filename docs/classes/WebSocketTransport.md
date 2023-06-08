# Class: WebSocketTransport

## Implements

- [`ITransport`](../interfaces/ITransport.md)

## Table of contents

### Constructors

- [constructor](WebSocketTransport.md#constructor)

### Properties

- [onConnect](WebSocketTransport.md#onconnect)
- [onDisconnect](WebSocketTransport.md#ondisconnect)
- [onMessage](WebSocketTransport.md#onmessage)
- [server](WebSocketTransport.md#server)

### Accessors

- [port](WebSocketTransport.md#port)

### Methods

- [close](WebSocketTransport.md#close)
- [getConnections](WebSocketTransport.md#getconnections)
- [send](WebSocketTransport.md#send)
- [start](WebSocketTransport.md#start)
- [stop](WebSocketTransport.md#stop)

## Constructors

### constructor

• **new WebSocketTransport**(`maxPayloadLength?`, `idleTimeout?`, `port?`)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `maxPayloadLength` | `number` | `undefined` |
| `idleTimeout` | `number` | `32` |
| `port` | `number` | `3000` |

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:44](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L44)

## Properties

### onConnect

• **onConnect**: (`connectionId`: `number`) => `void`

#### Type declaration

▸ (`connectionId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `connectionId` | `number` |

##### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[onConnect](../interfaces/ITransport.md#onconnect)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:40](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L40)

___

### onDisconnect

• **onDisconnect**: (`connectionId`: `number`) => `void`

#### Type declaration

▸ (`connectionId`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `connectionId` | `number` |

##### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[onDisconnect](../interfaces/ITransport.md#ondisconnect)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:41](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L41)

___

### onMessage

• **onMessage**: (`connectionId`: `number`, `message`: `Uint8Array`) => `void`

#### Type declaration

▸ (`connectionId`, `message`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `connectionId` | `number` |
| `message` | `Uint8Array` |

##### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[onMessage](../interfaces/ITransport.md#onmessage)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:42](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L42)

___

### server

• **server**: [`Server`](Server.md)

The server this transport is attached to. This is set by the server
when the transport is added.

#### Implementation of

[ITransport](../interfaces/ITransport.md).[server](../interfaces/ITransport.md#server)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:6](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L6)

## Accessors

### port

• `get` **port**(): `number`

#### Returns

`number`

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:29](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L29)

• `set` **port**(`port`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `port` | `number` |

#### Returns

`void`

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:33](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L33)

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

#### Implementation of

[ITransport](../interfaces/ITransport.md).[close](../interfaces/ITransport.md#close)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:104](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L104)

___

### getConnections

▸ **getConnections**(): `number`[]

Gets the IDs of all clients connected to this transport.

#### Returns

`number`[]

#### Implementation of

[ITransport](../interfaces/ITransport.md).[getConnections](../interfaces/ITransport.md#getconnections)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:124](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L124)

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

#### Implementation of

[ITransport](../interfaces/ITransport.md).[send](../interfaces/ITransport.md#send)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:100](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L100)

___

### start

▸ **start**(): `void`

Starts the transport.

#### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[start](../interfaces/ITransport.md#start)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:108](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L108)

___

### stop

▸ **stop**(): `void`

Stops the transport.

#### Returns

`void`

#### Implementation of

[ITransport](../interfaces/ITransport.md).[stop](../interfaces/ITransport.md#stop)

#### Defined in

[Transports/WebSocket/WebSocketTransport.ts:117](https://github.com/tufcode/soketto-server/blob/1241b61/src/Transports/WebSocket/WebSocketTransport.ts#L117)
