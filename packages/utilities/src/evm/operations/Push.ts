import { Operation } from "@ethereum-react/types";

import { EVM } from "../EVM";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class Push implements Executor {
  public execute(op: Operation, evm: EVM) {
    const word: Word = {
      isSymbolic: false,
      value: op.argument
    };
    evm.stack.push(word);
  }
}
