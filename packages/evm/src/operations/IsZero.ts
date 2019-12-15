import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class IsZero implements Executor {
  public execute(op: Operation, evm: EVM) {
    const value = evm.stack.pop();
    if (!value) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    if (!value.isSymbolic) {
      if (value.value.isZero()) {
        evm.stack.push(Word.createLiteral("01"));
      } else {
        evm.stack.push(Word.createLiteral("00"));
      }
    } else {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
    }
  }
}
