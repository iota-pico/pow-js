var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const spongeFactory_1 = require("@iota-pico/crypto/dist/factories/spongeFactory");
const trits_1 = require("@iota-pico/data/dist/data/trits");
// tslint:disable-next-line:import-name
const big_integer_1 = __importDefault(require("big-integer"));
/**
 * PearlDiver implementation in plain JavaScript.
 */
class PearlDiver {
    /**
     * Create a new instance of PearlDiver.
     */
    constructor() {
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl");
        this._hashLength = curl.getConstant("HASH_LENGTH");
        this._stateLength = curl.getConstant("STATE_LENGTH");
        this._numberRounds = curl.getConstant("NUMBER_OF_ROUNDS");
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
        const trits = new Int8Array(this._hashLength);
        const midStateCopy = {
            low: searchStates.low.slice(),
            high: searchStates.high.slice()
        };
        while (searching) {
            this.increment(midStateCopy, this._nonceIncrementStart, this._hashLength);
            const state = {
                low: midStateCopy.low.slice(),
                high: midStateCopy.high.slice()
            };
            this.transform(state);
            const nonceProbe = this.isFoundFast(state, minWeightMagnitude);
            if (nonceProbe.toJSNumber() === 0) {
                continue;
            }
            let nonceOutput = big_integer_1.default(1);
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
        return trits_1.Trits.fromArray(trits).toTrytes();
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
            }
        }
    }
    increment(searchStates, fromIndex, toIndex) {
        for (let i = fromIndex; i < toIndex; i++) {
            if (searchStates.low[i].toJSNumber() === PearlDiver.LOW_BITS) {
                searchStates.low[i] = big_integer_1.default(PearlDiver.HIGH_BITS);
                searchStates.high[i] = big_integer_1.default(PearlDiver.LOW_BITS);
            }
            else {
                if (searchStates.high[i].toJSNumber() === PearlDiver.LOW_BITS) {
                    searchStates.high[i] = big_integer_1.default(PearlDiver.HIGH_BITS);
                }
                else {
                    searchStates.low[i] = big_integer_1.default(PearlDiver.LOW_BITS);
                }
                break;
            }
        }
    }
    prepare(transactionTrytes) {
        const curl = spongeFactory_1.SpongeFactory.instance().create("curl");
        curl.initialize();
        const transactionTrits = trits_1.Trits.fromTrytes(transactionTrytes).toArray();
        curl.absorb(transactionTrits, 0, this._transactionLength - this._hashLength);
        const curlState = curl.getState();
        transactionTrits
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
                    states.low[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
                    states.high[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
                    break;
                case 1:
                    states.low[index] = big_integer_1.default(PearlDiver.LOW_BITS);
                    states.high[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
                    break;
                default:
                    states.low[index] = big_integer_1.default(PearlDiver.HIGH_BITS);
                    states.high[index] = big_integer_1.default(PearlDiver.LOW_BITS);
            }
        });
        this.searchOffset(states, this._nonceStart);
        return states;
    }
    searchOffset(states, offset) {
        states.low[offset + 0] = big_integer_1.default("-2635249153387078803", 10);
        states.high[offset + 0] = big_integer_1.default("-5270498306774157605", 10);
        states.low[offset + 1] = big_integer_1.default("-1010780497189564473", 10);
        states.high[offset + 1] = big_integer_1.default("-8086243977516515777", 10);
        states.low[offset + 2] = big_integer_1.default("9223336921201902079", 10);
        states.high[offset + 2] = big_integer_1.default("-17979214271348737", 10);
        states.low[offset + 3] = big_integer_1.default("-18014398375264257", 10);
        states.high[offset + 3] = big_integer_1.default("18014398509481983", 10);
    }
    isFoundFast(searchStates, minWeightMagnitude) {
        let lastMeasurement = big_integer_1.default(PearlDiver.HIGH_BITS);
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
/* @internal */
PearlDiver.HIGH_BITS = -1;
/* @internal */
PearlDiver.LOW_BITS = 0;
exports.PearlDiver = PearlDiver;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVhcmxEaXZlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wZWFybERpdmVyL3BlYXJsRGl2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGtGQUErRTtBQUMvRSwyREFBd0Q7QUFFeEQsdUNBQXVDO0FBQ3ZDLDhEQUFpQztBQUdqQzs7R0FFRztBQUNIO0lBdUJJOztPQUVHO0lBQ0g7UUFDSSxNQUFNLElBQUksR0FBRyw2QkFBYSxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3hELE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsYUFBYSxDQUFDO1FBQ3hELE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQztJQUNsRSxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsa0JB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