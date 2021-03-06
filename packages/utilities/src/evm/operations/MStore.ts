import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class MStore implements Executor {
  public execute(op: Operation, evm: EVM) {
    const location = evm.stack.pop();
    const value = evm.stack.pop();
    if (!location || !value) {
      return;
    }
    if (!location.isSymbolic) {
      if (location.value.bitLength() > 53) {
        return;
      }
      evm.memory.writeWord(location.value.toNumber(), value);
    }
  }
}
