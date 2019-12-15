import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Swap implements Executor {
  public execute(op: Operation, evm: EVM) {
    const index = parseInt(op.opcode.name.slice(4));
    const stack0 = evm.stack.get(0);
    const stackIndex = evm.stack.get(index);
    evm.stack.put(0, stackIndex);
    evm.stack.put(index, stack0);
  }
}
