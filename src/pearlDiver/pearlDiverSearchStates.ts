import * as bigInt from "big-integer";

/**
 * PearDiverSearchStates for storing states during search.
 * Converted from https://github.com/iotaledger/curl.lib.js/blob/master/src/pearldiver.js
 */
export type PearlDiverSearchStates = {
    low: bigInt.BigInteger[];
    high: bigInt.BigInteger[];
};
