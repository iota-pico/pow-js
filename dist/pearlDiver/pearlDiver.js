"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trits_1 = require("@iota-pico/data/dist/data/trits");
const bigInt = require("big-integer");
/**
 * PearlDiver implementation in plain JavaScript.
 */
class PearlDiver {
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    searchWithTrytes(trytes, minWeightMagnitude) {
        const transactionTrits = trits_1.Trits.fromTrytes(trytes).toValue();
        const midCurlStateLow = [];
        const midCurlStateHigh = [];
        for (let i = PearlDiver.CURL_HASH_LENGTH; i < PearlDiver.CURL_STATE_LENGTH; i++) {
            midCurlStateLow[i] = bigInt(PearlDiver.HIGH_BITS);
            midCurlStateHigh[i] = bigInt(PearlDiver.HIGH_BITS);
        }
        let offset = 0;
        for (let i = ((PearlDiver.TRANSACTION_LENGTH - PearlDiver.CURL_HASH_LENGTH) / PearlDiver.CURL_HASH_LENGTH) - 1; i >= 0; i--) {
            for (let j = 0; j < PearlDiver.CURL_HASH_LENGTH; j++) {
                switch (transactionTrits[offset++]) {
                    case 0:
                        midCurlStateLow[j] = bigInt(PearlDiver.HIGH_BITS);
                        midCurlStateHigh[j] = bigInt(PearlDiver.HIGH_BITS);
                        break;
                    case 1:
                        midCurlStateLow[j] = bigInt(PearlDiver.LOW_BITS);
                        midCurlStateHigh[j] = bigInt(PearlDiver.HIGH_BITS);
                        break;
                    default:
                        midCurlStateLow[j] = bigInt(PearlDiver.HIGH_BITS);
                        midCurlStateHigh[j] = bigInt(PearlDiver.LOW_BITS);
                }
            }
            this.transform(midCurlStateLow, midCurlStateHigh);
        }
        let offset2;
        for (offset2 = 0; offset2 < 162; offset2++) {
            switch (transactionTrits[offset++]) {
                case 0:
                    midCurlStateLow[offset2] = bigInt(PearlDiver.HIGH_BITS);
                    midCurlStateHigh[offset2] = bigInt(PearlDiver.HIGH_BITS);
                    break;
                case 1:
                    midCurlStateLow[offset2] = bigInt(PearlDiver.LOW_BITS);
                    midCurlStateHigh[offset2] = bigInt(PearlDiver.HIGH_BITS);
                    break;
                default:
                    midCurlStateLow[offset] = bigInt(PearlDiver.HIGH_BITS);
                    midCurlStateHigh[offset2] = bigInt(PearlDiver.LOW_BITS);
            }
        }
        midCurlStateLow[offset2 + 0] = bigInt("-2635249153387078803", 10);
        midCurlStateHigh[offset2 + 0] = bigInt("-5270498306774157605", 10);
        midCurlStateLow[offset2 + 1] = bigInt("-1010780497189564473", 10);
        midCurlStateHigh[offset2 + 1] = bigInt("-8086243977516515777", 10);
        midCurlStateLow[offset2 + 2] = bigInt("9223336921201902079", 10);
        midCurlStateHigh[offset2 + 2] = bigInt("-17979214271348737", 10);
        midCurlStateLow[offset2 + 3] = bigInt("-18014398375264257", 10);
        midCurlStateHigh[offset2 + 3] = bigInt("18014398509481983", 10);
        const midCurlStateCopyLow = midCurlStateLow.slice(0, PearlDiver.CURL_STATE_LENGTH);
        const midCurlStateCopyHigh = midCurlStateHigh.slice(0, PearlDiver.CURL_STATE_LENGTH);
        let state = true;
        let mask;
        let outMask = bigInt(1);
        while (state) {
            this.increment(midCurlStateCopyLow, midCurlStateCopyHigh, ((PearlDiver.CURL_HASH_LENGTH / 9) * 2) + 162, PearlDiver.CURL_HASH_LENGTH);
            const curlStateLow = midCurlStateCopyLow.slice(0, PearlDiver.CURL_STATE_LENGTH);
            const curlStateHigh = midCurlStateCopyHigh.slice(0, PearlDiver.CURL_STATE_LENGTH);
            this.transform(curlStateLow, curlStateHigh);
            mask = bigInt(PearlDiver.HIGH_BITS);
            for (let i = minWeightMagnitude - 1; i >= 0; i--) {
                const low = curlStateLow[PearlDiver.CURL_HASH_LENGTH - 1 - i];
                const high = curlStateHigh[PearlDiver.CURL_HASH_LENGTH - 1 - i];
                const lowXorHigh = low.xor(high);
                const notLowXorHigh = lowXorHigh.not();
                mask = mask.and(notLowXorHigh);
                if (mask === bigInt.zero) {
                    break;
                }
            }
            if (mask === bigInt.zero) {
                continue;
            }
            if (state) {
                state = false;
                while (outMask.and(mask).toJSNumber() === 0) {
                    outMask = outMask.shiftLeft(1);
                }
                for (let i = 0; i < PearlDiver.CURL_HASH_LENGTH; i++) {
                    transactionTrits[PearlDiver.TRANSACTION_LENGTH - PearlDiver.CURL_HASH_LENGTH + i] =
                        (midCurlStateCopyLow[i].and(outMask)).toJSNumber() === 0 ? 1
                            : midCurlStateCopyHigh[i].and(outMask).toJSNumber() === 0 ? -1 : 0;
                }
            }
        }
        return trits_1.Trits.fromValue(transactionTrits).toTrytes();
    }
    transform(curlStateLow, curlStateHigh) {
        let curlScratchpadIndex = 0;
        for (let round = 0; round < PearlDiver.NUMBER_OF_ROUNDS; round++) {
            const curlScratchpadLow = curlStateLow.slice(0, PearlDiver.CURL_STATE_LENGTH);
            const curlScratchpadHigh = curlStateHigh.slice(0, PearlDiver.CURL_STATE_LENGTH);
            for (let curlStateIndex = 0; curlStateIndex < PearlDiver.CURL_STATE_LENGTH; curlStateIndex++) {
                const alpha = curlScratchpadLow[curlScratchpadIndex];
                const beta = curlScratchpadHigh[curlScratchpadIndex];
                if (curlScratchpadIndex < 365) {
                    curlScratchpadIndex += 364;
                }
                else {
                    curlScratchpadIndex += -365;
                }
                const gamma = curlScratchpadHigh[curlScratchpadIndex];
                const lowXorBeta = curlScratchpadLow[curlScratchpadIndex].xor(beta);
                const notGamma = gamma.not();
                const alphaOrNotGamma = alpha.or(notGamma);
                const delta = alphaOrNotGamma.and(lowXorBeta);
                curlStateLow[curlStateIndex] = delta.not();
                const alphaXorGamma = alpha.xor(gamma);
                curlStateHigh[curlStateIndex] = alphaXorGamma.or(delta);
            }
        }
    }
    increment(midCurlStateCopyLow, midCurlStateCopyHigh, fromIndex, toIndex) {
        for (let i = fromIndex; i < toIndex; i++) {
            if (midCurlStateCopyLow[i].toJSNumber() === PearlDiver.LOW_BITS) {
                midCurlStateCopyLow[i] = bigInt(PearlDiver.HIGH_BITS);
                midCurlStateCopyHigh[i] = bigInt(PearlDiver.LOW_BITS);
            }
            else {
                if (midCurlStateCopyHigh[i].toJSNumber() === PearlDiver.LOW_BITS) {
                    midCurlStateCopyHigh[i] = bigInt(PearlDiver.HIGH_BITS);
                }
                else {
                    midCurlStateCopyLow[i] = bigInt(PearlDiver.LOW_BITS);
                }
                break;
            }
        }
    }
}
PearlDiver.CURL_HASH_LENGTH = 243;
PearlDiver.CURL_STATE_LENGTH = PearlDiver.CURL_HASH_LENGTH * 3;
PearlDiver.TRANSACTION_LENGTH = 8019;
PearlDiver.NUMBER_OF_ROUNDS = 81;
PearlDiver.HIGH_BITS = -1;
PearlDiver.LOW_BITS = 0;
exports.PearlDiver = PearlDiver;
