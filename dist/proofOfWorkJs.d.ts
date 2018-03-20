import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { ProofOfWorkBase } from "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
/**
 * ProofOfWork implementation using JavaScript.
 */
export declare class ProofOfWorkJs extends ProofOfWorkBase {
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService?: ITimeService);
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes>;
}
