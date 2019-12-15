import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Word } from "../Word";
import { Executor } from "./Executor";

export class Msize implements Executor {
  public execute(op: Operation, evm: EVM) {
    evm.stack.push(Word.createLiteral(evm.memory.wordCount().toString(16)));
  }
}
