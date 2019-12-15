import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Pop implements Executor {
  public execute(op: Operation, evm: EVM) {
    evm.stack.pop();
  }
}
