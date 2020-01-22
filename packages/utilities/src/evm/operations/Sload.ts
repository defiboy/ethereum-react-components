import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class Sload implements Executor {
  public execute(op: Operation, evm: EVM) {
    const slot = evm.stack.pop();
    if (!slot) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    let value = evm.storage.load(slot);
    if (!value) {
      // This only has sense during CFG creation
      value = Word.createSymbolic(Symbols.UNKNOWN);
    }
    evm.stack.push(value);
  }
}
