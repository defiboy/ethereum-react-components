import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class MStore8 implements Executor {
  public execute(op: Operation, evm: EVM) {
    const location = evm.stack.pop();
    const value = evm.stack.pop();
    if (!location || !value) {
      return;
    }
    if (!location.isSymbolic && !value.isSymbolic) {
      evm.memory.writeByte(location.value.toNumber(), value);
    }
  }
}
