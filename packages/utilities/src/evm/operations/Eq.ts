import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class Eq implements Executor {
  public execute(op: Operation, evm: EVM) {
    const operand1 = evm.stack.pop();
    const operand2 = evm.stack.pop();
    if (!operand1 || !operand2) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    if (!operand1.isSymbolic && !operand2.isSymbolic) {
      if (operand1.value.eq(operand2.value)) {
        evm.stack.push(Word.createLiteral("01"));
      } else {
        evm.stack.push(Word.createLiteral("00"));
      }
    } else {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
    }
  }
}
