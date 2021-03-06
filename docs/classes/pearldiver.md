[@iota-pico/pow-js](../README.md) > [PearlDiver](../classes/pearldiver.md)

# Class: PearlDiver

PearlDiver implementation in plain JavaScript.

## Hierarchy

**PearlDiver**

## Index

### Constructors

* [constructor](pearldiver.md#constructor)

### Methods

* [searchWithTrytes](pearldiver.md#searchwithtrytes)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PearlDiver**(): [PearlDiver](pearldiver.md)

*Defined in [pearlDiver/pearlDiver.ts:31](https://github.com/iota-pico/pow-js/tree/master/src/pearlDiver/pearlDiver.ts#L31*

Create a new instance of PearlDiver.

**Returns:** [PearlDiver](pearldiver.md)

___

## Methods

<a id="searchwithtrytes"></a>

###  searchWithTrytes

▸ **searchWithTrytes**(trytes: *`Trytes`*, minWeightMagnitude: *`number`*): `Trytes`

*Defined in [pearlDiver/pearlDiver.ts:56](https://github.com/iota-pico/pow-js/tree/master/src/pearlDiver/pearlDiver.ts#L56*

Perform a proof of work on the data.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| trytes | `Trytes` |  The trytes to perform the pow on. |
| minWeightMagnitude | `number` |  The minimum weight magnitude. |

**Returns:** `Trytes`
The trytes produced by the proof of work.

___

