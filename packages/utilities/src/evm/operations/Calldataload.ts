import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class Calldataload implements Executor {
  public execute(op: Operation, evm: EVM) {
    evm.stack.pop();
    evm.stack.push(Word.createSymbolic(Symbols.CALLDATALOAD));
  }
}
