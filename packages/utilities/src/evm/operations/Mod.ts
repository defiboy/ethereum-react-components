import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { UintUtils } from "../UintUtils";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class Mod implements Executor {
  public execute(op: Operation, evm: EVM) {
    const operand1 = evm.stack.pop();
    const operand2 = evm.stack.pop();
    if (!operand1 || !operand2) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    if (!operand1.isSymbolic && !operand2.isSymbolic) {
      if (operand2.value.eq(UintUtils.ZERO)) {
        evm.stack.push(Word.createLiteral("00"));
      } else {
        const result = operand1.value.mod(operand2.value);
        evm.stack.push(Word.createLiteral(result.toString(16)));
      }
    } else {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
    }
  }
}
