import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class Staticcall implements Executor {
  public execute(op: Operation, evm: EVM) {
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.push(Word.createSymbolic(Symbols.STATICCALL));
  }
}
