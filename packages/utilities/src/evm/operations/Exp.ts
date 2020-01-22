import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { UintUtils } from "../UintUtils";
import { Word } from "../Word";
import { Executor } from "./Executor";

// tslint:disable-next-line
const BN = require("bn.js");

export class Exp implements Executor {
  public execute(op: Operation, evm: EVM) {
    const base = evm.stack.pop();
    const exp = evm.stack.pop();
    if (!base || !exp) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    if (!base.isSymbolic && !exp.isSymbolic) {
      const baseValue = base.value;
      const expValue = exp.value;

      let result = UintUtils.ONE;
      if (!expValue.eq(UintUtils.ZERO)) {
        const mod = BN.red(UintUtils.TWO_POW_256);
        const b = baseValue.toRed(mod);
        result = b.redPow(expValue);
      }
      evm.stack.push(Word.createLiteral(result.toString(16)));
    } else {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
    }
  }
}
