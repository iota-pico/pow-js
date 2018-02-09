import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * PearlDiver implementation in plain JavaScript.
 */
export declare class PearlDiver {
    /**
     * Create a new instance of PearlDiver.
     */
    constructor();
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    searchWithTrytes(trytes: Trytes, minWeightMagnitude: number): Trytes;
    private search(searchStates, minWeightMagnitude);
    private transform(searchStates);
    private increment(searchStates, fromIndex, toIndex);
    private prepare(transactionTrytes);
    private searchInit(curlState);
    private searchOffset(states, offset);
    private isNonceFound(searchStates, minWeightMagnitude);
}
