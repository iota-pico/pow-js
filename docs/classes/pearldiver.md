[@iota-pico/pow-js](../README.md) > [PearlDiver](../classes/pearldiver.md)



# Class: PearlDiver


PearlDiver implementation in plain JavaScript.

## Index

### Constructors

* [constructor](pearldiver.md#constructor)


### Methods

* [searchWithTrytes](pearldiver.md#searchwithtrytes)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new PearlDiver**(): [PearlDiver](pearldiver.md)


*Defined in [pearlDiver/pearlDiver.ts:31](https://github.com/iotaeco/iota-pico-pow-js/blob/37995ab/src/pearlDiver/pearlDiver.ts#L31)*



Create a new instance of PearlDiver.




**Returns:** [PearlDiver](pearldiver.md)

---


## Methods
<a id="searchwithtrytes"></a>

###  searchWithTrytes

► **searchWithTrytes**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Trytes`



*Defined in [pearlDiver/pearlDiver.ts:57](https://github.com/iotaeco/iota-pico-pow-js/blob/37995ab/src/pearlDiver/pearlDiver.ts#L57)*



Perform a proof of work on the data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes`   |  The trytes to perform the pow on. |
| minWeightMagnitude | `number`   |  The minimum weight magnitude. |





**Returns:** `Trytes`
The trytes produced by the proof of work.






___


