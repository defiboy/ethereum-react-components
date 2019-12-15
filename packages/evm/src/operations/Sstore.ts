import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Sstore implements Executor {
  public execute(op: Operation, evm: EVM) {
    const slot = evm.stack.pop();
    const value = evm.stack.pop();
    evm.storage.store(slot, value);
  }
}
