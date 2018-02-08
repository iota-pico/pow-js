"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const pearlDiver_1 = require("./pearlDiver/pearlDiver");
/**
 * CurlProofOfWork implementation using NodeJS.
 */
class CurlProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    async initialize() {
        return Promise.resolve();
    }
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async pow(trytes, minWeightMagnitude) {
        if (trytes === undefined || trytes === null) {
            throw new coreError_1.CoreError("Trytes can not be null or undefined");
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude)) {
            throw new coreError_1.CoreError("The minWeightMagnitude value is not an integer");
        }
        return new pearlDiver_1.PearlDiver().searchWithTrytes(trytes, minWeightMagnitude);
    }
}
exports.CurlProofOfWork = CurlProofOfWork;
