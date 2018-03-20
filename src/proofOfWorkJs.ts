import { NumberHelper } from "@iota-pico/core/dist/helpers/numberHelper";
import { ObjectHelper } from "@iota-pico/core/dist/helpers/objectHelper";
import { ITimeService } from "@iota-pico/core/dist/interfaces/ITimeService";
import { CryptoError } from "@iota-pico/crypto/dist/error/cryptoError";
import { ProofOfWorkBase } from "@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase";
import { Trytes } from "@iota-pico/data/dist/data/trytes";
import { PearlDiver } from "./pearlDiver/pearlDiver";

/**
 * ProofOfWork implementation using JavaScript.
 */
export class ProofOfWorkJs extends ProofOfWorkBase {
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService?: ITimeService) {
        super(timeService);
    }

    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    public async singlePow(trytes: Trytes, minWeightMagnitude: number): Promise<Trytes> {
        if (!ObjectHelper.isType(trytes, Trytes)) {
            throw new CryptoError("The trytes must be an object of type Trytes");
        }
        if (!NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new CryptoError("The minWeightMagnitude must be > 0");
        }
        const nonce = new PearlDiver().searchWithTrytes(trytes, minWeightMagnitude);
        const nonceString: string = nonce.toString();
        const trytesString: string = trytes.toString();
        return Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length) + nonceString);
    }
}
