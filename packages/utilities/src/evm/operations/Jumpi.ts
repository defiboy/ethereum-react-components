import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Jumpi implements Executor {
  public execute(op: Operation, evm: EVM) {
    const jumpLocation = evm.stack.pop();
    evm.stack.pop();
    evm.nextJumpLocation = jumpLocation;
  }
}
