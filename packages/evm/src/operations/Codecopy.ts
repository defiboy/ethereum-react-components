import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Codecopy implements Executor {
  public execute(op: Operation, evm: EVM) {
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.pop();
    // TODO Push symbol when EVMMemory supports symbols
  }
}
