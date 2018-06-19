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
    private search;
    private transform;
    private increment;
    private prepare;
    private searchInit;
    private searchOffset;
    private isFoundFast;
}
