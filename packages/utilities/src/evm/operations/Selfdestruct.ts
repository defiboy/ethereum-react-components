import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Selfdestruct implements Executor {
  public execute(op: Operation, evm: EVM) {
    evm.stack.pop();
  }
}
