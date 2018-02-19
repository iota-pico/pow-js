Object.defineProperty(exports, "__esModule", { value: true });
const coreError_1 = require("@iota-pico/core/dist/error/coreError");
const numberHelper_1 = require("@iota-pico/core/dist/helpers/numberHelper");
const trytes_1 = require("@iota-pico/data/dist/data/trytes");
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
        const nonce = new pearlDiver_1.PearlDiver().searchWithTrytes(trytes, minWeightMagnitude);
        const nonceString = nonce.toString();
        const trytesString = trytes.toString();
        return trytes_1.Trytes.create(trytesString.substr(0, trytesString.length - nonceString.length) + nonceString);
    }
}
exports.CurlProofOfWork = CurlProofOfWork;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybFByb29mT2ZXb3JrLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2N1cmxQcm9vZk9mV29yay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsb0VBQWlFO0FBQ2pFLDRFQUF5RTtBQUV6RSw2REFBMEQ7QUFDMUQsd0RBQXFEO0FBRXJEOztHQUVHO0FBQ0g7SUFDSTs7O09BR0c7SUFDSSxLQUFLLENBQUMsVUFBVTtRQUNuQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBYyxFQUFFLGtCQUEwQjtRQUN2RCxFQUFFLENBQUMsQ0FBQyxNQUFNLEtBQUssU0FBUyxJQUFJLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNELEVBQUUsQ0FBQyxDQUFDLENBQUMsMkJBQVksQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsTUFBTSxJQUFJLHFCQUFTLENBQUMsZ0RBQWdELENBQUMsQ0FBQztRQUMxRSxDQUFDO1FBQ0QsTUFBTSxLQUFLLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDNUUsTUFBTSxXQUFXLEdBQVcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzdDLE1BQU0sWUFBWSxHQUFXLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMvQyxNQUFNLENBQUMsZUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUN6RyxDQUFDO0NBQ0o7QUEzQkQsMENBMkJDIn0=