[@iota-pico/pow-js](../README.md) > [ProofOfWork](../classes/proofofwork.md)



# Class: ProofOfWork


ProofOfWork implementation using JavaScript.

## Implements

* `IProofOfWork`

## Index

### Methods

* [initialize](proofofwork.md#initialize)
* [performsSingle](proofofwork.md#performssingle)
* [pow](proofofwork.md#pow)



---
## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Defined in [proofOfWork.ts:17](https://github.com/iotaeco/iota-pico-pow-js/blob/11c3195/src/proofOfWork.ts#L17)*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="performssingle"></a>

###  performsSingle

► **performsSingle**(): `boolean`



*Defined in [proofOfWork.ts:25](https://github.com/iotaeco/iota-pico-pow-js/blob/11c3195/src/proofOfWork.ts#L25)*



Performs single conversion per pow call.




**Returns:** `boolean`
True if pow only does one conversion.






___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Defined in [proofOfWork.ts:37](https://github.com/iotaeco/iota-pico-pow-js/blob/11c3195/src/proofOfWork.ts#L37)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trunkTransaction | `Hash`   |  The trunkTransaction to use for the pow. |
| branchTransaction | `Hash`   |  The branchTransaction to use for the pow. |
| trytes | `Trytes`[]   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`[]>
The trytes produced by the proof of work.






___

