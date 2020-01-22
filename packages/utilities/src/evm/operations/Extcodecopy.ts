import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Extcodecopy implements Executor {
  public execute(op: Operation, evm: EVM) {
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.pop();
    evm.stack.pop();
    // TODO push symbol to memory when it is supported
  }
}
