import { SpongeFactory } from "@iota-pico/crypto/dist/factories/spongeFactory";
import { Trits } from "@iota-pico/data/dist/data/trits";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import bigInteger from "big-integer";
import { PearlDiverSearchStates } from "./pearlDiverSearchStates";

/**
 * PearlDiver implementation in plain JavaScript.
 */
export class PearlDiver {
    /* @internal */
    private static readonly HIGH_BITS: number = -1;
    /* @internal */
    private static readonly LOW_BITS: number = 0;

    /* @internal */
    private readonly _hashLength: number;
    /* @internal */
    private readonly _stateLength: number;
    /* @internal */
    private readonly _numberRounds: number;
    /* @internal */
    private readonly _transactionLength: number;
    /* @internal */
    private readonly _nonceLength: number;
    /* @internal */
    private readonly _nonceStart: number;
    /* @internal */
    private readonly _nonceInitStart: number;
    /* @internal */
    private readonly _nonceIncrementStart: number;

    /**
     * Create a new instance of PearlDiver.
     */
    public constructor() {
        const curl = SpongeFactory.instance().create("curl");
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
    public searchWithTrytes(trytes: Trytes, minWeightMagnitude: number): Trytes {
        const curlState = this.prepare(trytes);

        const searchStates = this.searchInit(curlState);

        return this.search(searchStates, minWeightMagnitude);
    }

    private search(searchStates: PearlDiverSearchStates, minWeightMagnitude: number): Trytes {
        let searching = true;

        const trits = new Int8Array(this._hashLength);

        const midStateCopy: PearlDiverSearchStates = {
            low: searchStates.low.slice(),
            high: searchStates.high.slice()
        };

        while (searching) {
            this.increment(midStateCopy, this._nonceIncrementStart, this._hashLength);

            const state: PearlDiverSearchStates = {
                low: midStateCopy.low.slice(),
                high: midStateCopy.high.slice()
            };

            this.transform(state);

            const nonceProbe = this.isFoundFast(state, minWeightMagnitude);

            if (nonceProbe.toJSNumber() === 0) {
                continue;
            }

            let nonceOutput = bigInteger(1);

            // Bit scan forward
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

        return Trits.fromArray(trits).toTrytes();
    }

    private transform(searchStates: PearlDiverSearchStates): void {
        let curlScratchpadIndex = 0;
        for (let round = 0; round < this._numberRounds; round++) {
            const curlScratchpad: PearlDiverSearchStates = {
                low: searchStates.low.slice(),
                high: searchStates.high.slice()
            };

            for (let stateIndex = 0; stateIndex < this._stateLength; stateIndex++) {
                const alpha = curlScratchpad.low[curlScratchpadIndex];
                const beta = curlScratchpad.high[curlScratchpadIndex];
                if (curlScratchpadIndex < 365) {
                    curlScratchpadIndex += 364;
                } else {
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
            }
        }
    }

    private increment(searchStates: PearlDiverSearchStates, fromIndex: number, toIndex: number): void {
        for (let i = fromIndex; i < toIndex; i++) {
            if (searchStates.low[i].toJSNumber() === PearlDiver.LOW_BITS) {
                searchStates.low[i] = bigInteger(PearlDiver.HIGH_BITS);
                searchStates.high[i] = bigInteger(PearlDiver.LOW_BITS);
            } else {
                if (searchStates.high[i].toJSNumber() === PearlDiver.LOW_BITS) {
                    searchStates.high[i] = bigInteger(PearlDiver.HIGH_BITS);
                } else {
                    searchStates.low[i] = bigInteger(PearlDiver.LOW_BITS);
                }
                break;
            }
        }
    }

    private prepare(transactionTrytes: Trytes): Int8Array {
        const curl = SpongeFactory.instance().create("curl");
        curl.initialize();
        const transactionTrits = Trits.fromTrytes(transactionTrytes).toArray();
        curl.absorb(transactionTrits, 0, this._transactionLength - this._hashLength);
        const curlState = curl.getState();
        transactionTrits
            .slice(this._transactionLength - this._hashLength, this._transactionLength)
            .forEach((value: number, index: number) => {
                curlState[index] = value;
            });
        return curlState;
    }

    private searchInit(curlState: Int8Array): PearlDiverSearchStates {
        const states: PearlDiverSearchStates = {
            low: [],
            high: []
        };
        curlState.forEach((trit: number, index: number) => {
            switch (trit) {
                case 0:
                    states.low[index] = bigInteger(PearlDiver.HIGH_BITS);
                    states.high[index] = bigInteger(PearlDiver.HIGH_BITS);
                    break;
                case 1:
                    states.low[index] = bigInteger(PearlDiver.LOW_BITS);
                    states.high[index] = bigInteger(PearlDiver.HIGH_BITS);
                    break;
                default:
                    states.low[index] = bigInteger(PearlDiver.HIGH_BITS);
                    states.high[index] = bigInteger(PearlDiver.LOW_BITS);
            }
        });
        this.searchOffset(states, this._nonceStart);

        return states;
    }

    private searchOffset(states: PearlDiverSearchStates, offset: number): void {
        states.low[offset + 0] = bigInteger("-2635249153387078803", 10);
        states.high[offset + 0] = bigInteger("-5270498306774157605", 10);
        states.low[offset + 1] = bigInteger("-1010780497189564473", 10);
        states.high[offset + 1] = bigInteger("-8086243977516515777", 10);
        states.low[offset + 2] = bigInteger("9223336921201902079", 10);
        states.high[offset + 2] = bigInteger("-17979214271348737", 10);
        states.low[offset + 3] = bigInteger("-18014398375264257", 10);
        states.high[offset + 3] = bigInteger("18014398509481983", 10);
    }

    private isFoundFast(searchStates: PearlDiverSearchStates, minWeightMagnitude: number): bigInteger.BigInteger {
        let lastMeasurement = bigInteger(PearlDiver.HIGH_BITS);
        for (let i = minWeightMagnitude - 1; i >= 0; i--) {
            const low = searchStates.low[this._hashLength - 1 - i];
            const high = searchStates.high[this._hashLength - 1 - i];
            const lowXorHigh = low.xor(high);
            const notLowXorHigh = lowXorHigh.not();
            lastMeasurement = lastMeasurement.and(notLowXorHigh);
            if (lastMeasurement.toJSNumber() === 0) {
                break;
            }
        }
        return lastMeasurement;
    }
}
