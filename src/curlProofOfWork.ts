import { CoreError } from "@iota-pico/core/dist/error/coreError";
import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ICurlProofOfWork } from "@iota-pico/crypto/dist/interfaces/ICurlProofOfWork";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { PearlDiver } from "./pearlDiver/pearlDiver";

/**
 * CurlProofOfWork implementation using NodeJS.
 */
export class CurlProofOfWork implements ICurlProofOfWork {
    /**
     * Allow the proof of work to perform any initialization.
     * Will throw an exception if the implementation is not supported.
     */
    public async initialize(): Promise<void> {
        return Promise.resolve();
    }

    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async pow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        if (trytes === undefined || trytes === null) {
            throw new CoreError("Trytes can not be null or undefined");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude)) {
            throw new CoreError("The minWeightMagnitude value is not an integer");
        }
        return new PearlDiver().searchWithTrytes(trytes, minWeightMagnitude);
    }
}
