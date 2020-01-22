import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Dup implements Executor {
  public execute(op: Operation, evm: EVM) {
    const index = parseInt(op.opcode.name.slice(3), 10);
    const wordToDuplicate = evm.stack.get(index - 1);
    evm.stack.push(wordToDuplicate);
  }
}
