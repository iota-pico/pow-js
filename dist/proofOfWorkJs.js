Object.defineProperty(exports, "__esModule", { value: true });
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const objectHelper_1 = require("@iota-pico/core/dist/helpers/objectHelper");
const cryptoError_1 = require("@iota-pico/crypto/dist/error/cryptoError");
const proofOfWorkBase_1 = require("@iota-pico/crypto/dist/proofOfWork/proofOfWorkBase");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
const pearlDiver_1 = require("./pearlDiver/pearlDiver");
/**
 * ProofOfWork implementation using JavaScript.
 */
class ProofOfWorkJs extends proofOfWorkBase_1.ProofOfWorkBase {
    /**
     * Create an instance of ProofOfWork.
     * @param timeService Service to get the time for attachments.
     */
    constructor(timeService) {
        super(timeService);
    }
    /**
     * Perform a proof of work on a single item.
     * @param trytes The trytes to perform the pow on.
     * @param minWeightMagnitude The minimum weight magnitude.
     * @returns The trytes produced by the proof of work.
     */
    async singlePow(trytes, minWeightMagnitude) {
        if (!objectHelper_1.ObjectHelper.isType(trytes, trytes_1.Trytes)) {
            throw new cryptoError_1.CryptoError("The trytes must be an object of type Trytes");
        }
        if (!numberHelper_1.NumberHelper.isInteger(minWeightMagnitude) || minWeightMagnitude <= 0) {
            throw new cryptoError_1.CryptoError("The minWeightMagnitude must be > 0");
        }
        const nonce = new pearlDiver_1.PearlDiver().searchWithTrytes(trytes, minWeightMagnitude);
        const nonceString = nonce.toString();
        const trytesString = trytes.toString();
        return trytes_1.Trytes.fromString(trytesString.substr(0, trytesString.length - nonceString.length) + nonceString);
    }
}
exports.ProofOfWorkJs = ProofOfWorkJs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvb2ZPZldvcmtKcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9wcm9vZk9mV29ya0pzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw0RUFBeUU7QUFDekUsNEVBQXlFO0FBRXpFLDBFQUF1RTtBQUN2RSx3RkFBcUY7QUFDckYsNkRBQTBEO0FBQzFELHdEQUFxRDtBQUVyRDs7R0FFRztBQUNILG1CQUEyQixTQUFRLGlDQUFlO0lBQzlDOzs7T0FHRztJQUNILFlBQVksV0FBMEI7UUFDbEMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBYyxFQUFFLGtCQUEwQjtRQUM3RCxJQUFJLENBQUMsMkJBQVksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLGVBQU0sQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sSUFBSSx5QkFBVyxDQUFDLDZDQUE2QyxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsSUFBSSxrQkFBa0IsSUFBSSxDQUFDLEVBQUU7WUFDeEUsTUFBTSxJQUFJLHlCQUFXLENBQUMsb0NBQW9DLENBQUMsQ0FBQztTQUMvRDtRQUNELE1BQU0sS0FBSyxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzVFLE1BQU0sV0FBVyxHQUFXLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QyxNQUFNLFlBQVksR0FBVyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0MsT0FBTyxlQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQzdHLENBQUM7Q0FDSjtBQTNCRCxzQ0EyQkMifQ==