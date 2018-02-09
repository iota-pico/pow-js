"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tritsHasherFactory_1 = require("@iota-pico/crypto/dist/factories/tritsHasherFactory");
const trits_1 = require("@iota-pico/data/dist/data/trits");
const bigInt = require("big-integer");
/**
 * PearlDiver implementation in plain JavaScript.
 */
class PearlDiver {
    /**
     * Create a new instance of PearlDiver.
     */
    constructor() {
        const curl = tritsHasherFactory_1.TritsHasherFactory.instance().create("curl");
        const curlConstants = curl.getConstants();
        this._hashLength = curlConstants.HASH_LENGTH;
        this._stateLength = curlConstants.STATE_LENGTH;
        this._numberRounds = curlConstants.NUMBER_OF_ROUNDS;
        this._transactionLength = this._hashLength * 33;
        this._nonceLength = this._hashLength / 3;
        this._nonceStart = this._hashLength - this._nonceLength;
        const OFFSET_LENGTH = 4;
        this._nonceInitStart = this._nonceStart + OFFSET_LENGTH;
        const INT_LENGTH = this._nonceLength / 3;
        this._nonceIncrementStart = this._nonceInitStart + INT_LENGTH;
    }
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    searchWithTrytes(trytes, minWeightMagnitude) {
        const curlState = this.prepare(trytes);
        const searchStates = this.searchInit(curlState);
        return this.search(searchStates, minWeightMagnitude);
    }
    search(searchStates, minWeightMagnitude) {
        let searching = true;
        const trits = [];
        const midStateCopy = {
            low: searchStates.low.slice(),
            high: searchStates.high.slice()
        };
        while (searching) {
            // console.log("increment", this._nonceIncrementStart);
            this.increment(midStateCopy, this._nonceIncrementStart, this._hashLength);
            // this.dumpArray("midStateCopy.low", midStateCopy.low);
            // this.dumpArray("midStateCopy.high", midStateCopy.high);
            const state = {
                low: midStateCopy.low.slice(),
                high: midStateCopy.high.slice()
            };
            // console.log("Before transform");
            // this.dumpArray("state.low", state.low, state.low.length);
            // this.dumpArray("state.high", state.high, state.high.length);
            this.transform(state);
            // console.log("after transform");
            // this.dumpArray("state.low", state.low, state.low.length);
            // this.dumpArray("state.high", state.high, state.high.length);
            const nonceProbe = this.isNonceFound(state, minWeightMagnitude);
            if (nonceProbe === bigInt.zero) {
                continue;
            }
            let nonceOutput = bigInt(1);
            while (nonceOutput.and(nonceProbe).toJSNumber() === 0) {
                nonceOutput = nonceOutput.shiftLeft(1);
            }
            searching = false;
            for (let i = 0; i < this._hashLength; i++) {
                trits[i] =
                    (midStateCopy.low[i].and(nonceOutput)).toJSNumber() === 0 ? 1
                        : midStateCopy.high[i].and(nonceOutput).toJSNumber() === 0 ? -1 : 0;
            }
        }
        return trits_1.Trits.fromTritsArray(trits).toTrytes();
    }
    transform(searchStates) {
        let curlScratchpadIndex = 0;
        for (let round = 0; round < this._numberRounds; round++) {
            const curlScratchpad = {
                low: searchStates.low.slice(),
                high: searchStates.high.slice()
            };
            for (let stateIndex = 0; stateIndex < this._stateLength; stateIndex++) {
                const alpha = curlScratchpad.low[curlScratchpadIndex];
                const beta = curlScratchpad.high[curlScratchpadIndex];
                if (curlScratchpadIndex < 365) {
                    curlScratchpadIndex += 364;
                }
                else {
                    curlScratchpadIndex += -365;
                }
                const gamma = curlScratchpad.high[curlScratchpadIndex];
                const lowXorBeta = curlScratchpad.low[curlScratchpadIndex].xor(beta);
                const notGamma = gamma.not();
                const alphaOrNotGamma = alpha.or(notGamma);
                const delta = alphaOrNotGamma.and(lowXorBeta);
                searchStates.low[stateIndex] = delta.not();
                const alphaXorGamma = alpha.xor(gamma);
                searchStates.high[stateIndex] = alphaXorGamma.or(delta);
                // if (stateIndex >= 296 && stateIndex <= 300) {
                //     console.log("alpha", alpha.toString());
                //     console.log("beta", beta.toString());
                //     console.log("curlScratchpadIndex", curlScratchpadIndex);
                //     console.log("gamma", gamma.toString());
                //     console.log("lowXorBeta", lowXorBeta.toString());
                //     console.log("notGamma", notGamma.toString());
                //     console.log("alphaOrNotGamma", alphaOrNotGamma.toString());
                //     console.log("delta", delta.toString());
                //     console.log("searchStates.low[stateIndex]", searchStates.low[stateIndex].toString());
                //     console.log("searchStates.high[stateIndex]", searchStates.high[stateIndex].toString());
                // }
                // if (stateIndex === 298) {
                //     this.dumpArray("round1", searchStates.high, 298);
                // }
            }
        }
    }
    increment(searchStates, fromIndex, toIndex) {
        for (let i = fromIndex; i < toIndex; i++) {
            if (searchStates.low[i].toJSNumber() === PearlDiver.LOW_BITS) {
                searchStates.low[i] = bigInt(PearlDiver.HIGH_BITS);
                searchStates.high[i] = bigInt(PearlDiver.LOW_BITS);
            }
            else {
                if (searchStates.high[i].toJSNumber() === PearlDiver.LOW_BITS) {
                    searchStates.high[i] = bigInt(PearlDiver.HIGH_BITS);
                }
                else {
                    searchStates.low[i] = bigInt(PearlDiver.LOW_BITS);
                }
                break;
            }
        }
    }
    prepare(transactionTrytes) {
        const curl = tritsHasherFactory_1.TritsHasherFactory.instance().create("curl");
        curl.initialize();
        const transactionTrits = trits_1.Trits.fromTrytes(transactionTrytes);
        curl.absorb(transactionTrits, 0, this._transactionLength - this._hashLength);
        const tritData = transactionTrits.toTritsArray();
        const curlState = curl.getState();
        tritData
            .slice(this._transactionLength - this._hashLength, this._transactionLength)
            .forEach((value, index) => {
            curlState[index] = value;
        });
        return curlState;
    }
    searchInit(curlState) {
        const states = {
            low: [],
            high: []
        };
        curlState.forEach((trit, index) => {
            switch (trit) {
                case 0:
                    states.low[index] = bigInt(PearlDiver.HIGH_BITS);
                    states.high[index] = bigInt(PearlDiver.HIGH_BITS);
                    break;
                case 1:
                    states.low[index] = bigInt(PearlDiver.LOW_BITS);
                    states.high[index] = bigInt(PearlDiver.HIGH_BITS);
                    break;
                default:
                    states.low[index] = bigInt(PearlDiver.HIGH_BITS);
                    states.high[index] = bigInt(PearlDiver.LOW_BITS);
            }
        });
        this.searchOffset(states, this._nonceStart);
        // this.dumpArray("curlState", curlState);
        // this.dumpArray("states.low", states.low);
        // this.dumpArray("states.high", states.high);
        return states;
    }
    searchOffset(states, offset) {
        states.low[offset + 0] = bigInt("-2635249153387078803", 10);
        states.high[offset + 0] = bigInt("-5270498306774157605", 10);
        states.low[offset + 1] = bigInt("-1010780497189564473", 10);
        states.high[offset + 1] = bigInt("-8086243977516515777", 10);
        states.low[offset + 2] = bigInt("9223336921201902079", 10);
        states.high[offset + 2] = bigInt("-17979214271348737", 10);
        states.low[offset + 3] = bigInt("-18014398375264257", 10);
        states.high[offset + 3] = bigInt("18014398509481983", 10);
    }
    isNonceFound(searchStates, minWeightMagnitude) {
        let mask = bigInt(PearlDiver.HIGH_BITS);
        for (let i = minWeightMagnitude - 1; i >= 0; i--) {
            const low = searchStates.low[this._hashLength - 1 - i];
            const high = searchStates.high[this._hashLength - 1 - i];
            const lowXorHigh = low.xor(high);
            const notLowXorHigh = lowXorHigh.not();
            mask = mask.and(notLowXorHigh);
            if (mask === bigInt.zero) {
                break;
            }
        }
        return mask;
    }
}
/* @internal */
PearlDiver.HIGH_BITS = -1;
/* @internal */
PearlDiver.LOW_BITS = 0;
exports.PearlDiver = PearlDiver;
