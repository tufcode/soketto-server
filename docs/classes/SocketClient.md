# Class: SocketClient

## Table of contents

### Properties

- [\_server](SocketClient.md#_server)
- [data](SocketClient.md#data)
- [onClose](SocketClient.md#onclose)
- [onError](SocketClient.md#onerror)
- [onMessage](SocketClient.md#onmessage)

### Accessors

- [id](SocketClient.md#id)
- [transport](SocketClient.md#transport)

### Methods

- [close](SocketClient.md#close)
- [send](SocketClient.md#send)

## Properties

### \_server

• `Private` **\_server**: [`Server`](Server.md)

#### Defined in

[SocketClient.ts:20](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L20)

___

### data

• **data**: `unknown`

Custom data associated with this client. You may set this to
anything.

#### Defined in

[SocketClient.ts:40](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L40)

___

### onClose

• **onClose**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[SocketClient.ts:43](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L43)

___

### onError

• **onError**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[SocketClient.ts:44](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L44)

___

### onMessage

• **onMessage**: (`event`: `string` \| `number`, `data`: `unknown`) => `void`

#### Type declaration

▸ (`event`, `data`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `number` |
| `data` | `unknown` |

##### Returns

`void`

#### Defined in

[SocketClient.ts:42](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L42)

## Accessors

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Defined in

[SocketClient.ts:22](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L22)

___

### transport

• `get` **transport**(): [`ITransport`](../interfaces/ITransport.md)

#### Returns

[`ITransport`](../interfaces/ITransport.md)

#### Defined in

[SocketClient.ts:26](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L26)

## Methods

### close

▸ **close**(): `void`

Disconnects this client

#### Returns

`void`

#### Defined in

[SocketClient.ts:58](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L58)

___

### send

▸ **send**(`event`, `data`): `void`

Sends a message to this client

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `unknown` | Unique identifier for this event. It is best to use a string or number for this, but you can use any type that can be serialized. Recommended type is uint8 (any number between 0 and 255). |
| `data` | `unknown` | Data that will be sent to this client. |

#### Returns

`void`

#### Defined in

[SocketClient.ts:75](https://github.com/tufcode/soketto-server/blob/1241b61/src/SocketClient.ts#L75)
