# Class: Server

## Table of contents

### Constructors

- [constructor](Server.md#constructor)

### Events

- [onConnect](Server.md#onconnect)

### Accessors

- [buffer](Server.md#buffer)
- [clients](Server.md#clients)
- [nextConnectionId](Server.md#nextconnectionid)
- [paketto](Server.md#paketto)
- [transports](Server.md#transports)

### Methods

- [broadcast](Server.md#broadcast)
- [start](Server.md#start)
- [stop](Server.md#stop)

## Constructors

### constructor

• **new Server**(`pakettoInstance?`, `preallocateBytes?`, `...transports`)

Creates a new server.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `pakettoInstance` | `PakettoInstance` | The paketto instance to use. Defaults to a new instance. |
| `preallocateBytes` | `number` | The number of bytes to preallocate for the packet buffer. Defaults to 1MB (1024 * 1024). |
| `...transports` | [`ITransport`](../interfaces/ITransport.md)[] | The transports to use. If none are provided, a [WebSocketTransport](WebSocketTransport.md) with port 3000 will be used. |

#### Defined in

[Server.ts:80](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L80)

## Events

### onConnect

• `Optional` **onConnect**: (`client`: [`SocketClient`](SocketClient.md)) => `void`

#### Type declaration

▸ (`client`): `void`

Called when a client connects to the server.

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `client` | [`SocketClient`](SocketClient.md) | The client that connected. |

##### Returns

`void`

#### Defined in

[Server.ts:69](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L69)

## Accessors

### buffer

• `get` **buffer**(): `Uint8Array`

#### Returns

`Uint8Array`

#### Defined in

[Server.ts:35](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L35)

___

### clients

• `get` **clients**(): `Map`<`number`, [`SocketClient`](SocketClient.md)\>

Returns a list of clients. This is a copy of the internal list, so
modifying it will not affect the server.

#### Returns

`Map`<`number`, [`SocketClient`](SocketClient.md)\>

#### Defined in

[Server.ts:60](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L60)

___

### nextConnectionId

• `get` **nextConnectionId**(): `number`

Gets the next connection ID.

#### Returns

`number`

#### Defined in

[Server.ts:31](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L31)

___

### paketto

• `get` **paketto**(): `PakettoInstance`

#### Returns

`PakettoInstance`

#### Defined in

[Server.ts:24](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L24)

___

### transports

• `get` **transports**(): `Set`<[`ITransport`](../interfaces/ITransport.md)\>

Returns a list of transports. This is a copy of the internal list, so
modifying it will not affect the server.

#### Returns

`Set`<[`ITransport`](../interfaces/ITransport.md)\>

#### Defined in

[Server.ts:52](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L52)

## Methods

### broadcast

▸ **broadcast**(`event`, `data`): `void`

Broadcasts a message to all connected clients.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `unknown` | The event identifier. |
| `data` | `unknown` | The data to send. |

#### Returns

`void`

#### Defined in

[Server.ts:127](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L127)

___

### start

▸ **start**(): `void`

Starts the server.

#### Returns

`void`

#### Defined in

[Server.ts:102](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L102)

___

### stop

▸ **stop**(): `void`

Stops the server.

#### Returns

`void`

#### Defined in

[Server.ts:116](https://github.com/tufcode/soketto-server/blob/1241b61/src/Server.ts#L116)
