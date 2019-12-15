import { Operation } from "@ethereum-react-components/types";

import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { UintUtils } from "../UintUtils";
import { Word } from "../Word";

import { Executor } from "./Executor";

export class Addmod implements Executor {
  public execute(op: Operation, evm: EVM) {
    const operand1 = evm.stack.pop();
    const operand2 = evm.stack.pop();
    const mod = evm.stack.pop();
    if (!operand1 || !operand2 || !mod) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    if (!operand1.isSymbolic && !operand2.isSymbolic && !mod.isSymbolic) {
      if (mod.value.eq(UintUtils.ZERO)) {
        evm.stack.push(Word.createLiteral("00"));
      } else {
        const result = operand1.value.add(operand2.value).mod(mod.value);
        evm.stack.push(Word.createLiteral(result.toString(16)));
      }
    } else {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
    }
  }
}
