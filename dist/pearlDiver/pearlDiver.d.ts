import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * PearlDiver implementation in plain JavaScript.
 */
export declare class PearlDiver {
    private static readonly CURL_HASH_LENGTH;
    private static readonly CURL_STATE_LENGTH;
    private static readonly TRANSACTION_LENGTH;
    private static readonly NUMBER_OF_ROUNDS;
    private static readonly HIGH_BITS;
    private static readonly LOW_BITS;
    /**
     * Perform a proof of work on the data.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    searchWithTrytes(trytes: Trytes, minWeightMagnitude: number): Trytes;
    private transform(curlStateLow, curlStateHigh);
    private increment(midCurlStateCopyLow, midCurlStateCopyHigh, fromIndex, toIndex);
}
