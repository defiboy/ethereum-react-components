import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Log implements Executor {
  public execute(op: Operation, evm: EVM) {
    const index = parseInt(op.opcode.name.slice(3));
    const stackToRemove = index + 2;
    let i = 1;
    while (i <= stackToRemove) {
      evm.stack.pop();
      i++;
    }
    // Don't need to store logs anywhere
  }
}
