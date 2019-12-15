import { Symbols } from "./Symbols";

// tslint:disable-next-line
const BN = require("bn.js");

export class Word {
  public static WORD_LENGTH_IN_BYTES = 32;

  public static createLiteral(valueHex: string): Word {
    return { isSymbolic: false, value: new BN(valueHex, 16) } as Word;
  }

  public static createSymbolic(symbol: Symbols): Word {
    return { isSymbolic: true, symbol } as Word;
  }

  public isSymbolic: boolean = false;
  public value?: any;
  public symbol?: Symbols;
}
