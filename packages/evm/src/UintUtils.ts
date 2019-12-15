const BN = require("bn.js");

export class UintUtils {
  public static TWO_POW_256 = new BN(
    "10000000000000000000000000000000000000000000000000000000000000000",
    16
  );
  public static ZERO = new BN("00", 16);
  public static ONE = new BN("01", 16);
  public static MAX_INTEGER = new BN(
    "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
    16
  );
}
