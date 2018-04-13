[@iota-pico/pow-js](../README.md) > [ProofOfWorkJs](../classes/proofofworkjs.md)



# Class: ProofOfWorkJs


ProofOfWork implementation using JavaScript.

## Hierarchy


 `ProofOfWorkBase`

**↳ ProofOfWorkJs**







## Implements

* `IProofOfWork`

## Index

### Constructors

* [constructor](proofofworkjs.md#constructor)


### Properties

* [MAX_TIMESTAMP_VALUE](proofofworkjs.md#max_timestamp_value)


### Methods

* [initialize](proofofworkjs.md#initialize)
* [pow](proofofworkjs.md#pow)
* [singlePow](proofofworkjs.md#singlepow)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new ProofOfWorkJs**(timeService?: *`ITimeService`*): [ProofOfWorkJs](proofofworkjs.md)


*Overrides ProofOfWorkBase.__constructor*

*Defined in [proofOfWorkJs.ts:12](https://github.com/iotaeco/iota-pico-pow-js/blob/664b1e2/src/proofOfWorkJs.ts#L12)*



Create an instance of ProofOfWork.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| timeService | `ITimeService`   |  Service to get the time for attachments. |





**Returns:** [ProofOfWorkJs](proofofworkjs.md)

---


## Properties
<a id="max_timestamp_value"></a>

### «Static» MAX_TIMESTAMP_VALUE

**●  MAX_TIMESTAMP_VALUE**:  *`number`* 

*Inherited from ProofOfWorkBase.MAX_TIMESTAMP_VALUE*

*Defined in D:/Workarea/iotaeco/iota-pico-pow-js/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:12*



The maximum timestamp value used in proof of work.




___


## Methods
<a id="initialize"></a>

###  initialize

► **initialize**(): `Promise`.<`void`>



*Inherited from ProofOfWorkBase.initialize*

*Defined in D:/Workarea/iotaeco/iota-pico-pow-js/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:22*



Allow the proof of work to perform any initialization. Will throw an exception if the implementation is not supported.




**Returns:** `Promise`.<`void`>





___

<a id="pow"></a>

###  pow

► **pow**(trunkTransaction: *`Hash`*, branchTransaction: *`Hash`*, trytes: *`Trytes`[]*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`[]>



*Inherited from ProofOfWorkBase.pow*

*Defined in D:/Workarea/iotaeco/iota-pico-pow-js/node_modules/@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase.d.ts:31*



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

<a id="singlepow"></a>

###  singlePow

► **singlePow**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Promise`.<`Trytes`>



*Overrides ProofOfWorkBase.singlePow*

*Defined in [proofOfWorkJs.ts:27](https://github.com/iotaeco/iota-pico-pow-js/blob/664b1e2/src/proofOfWorkJs.ts#L27)*



Perform a proof of work on a single item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Promise`.<`Trytes`>
The trytes produced by the proof of work.






___


