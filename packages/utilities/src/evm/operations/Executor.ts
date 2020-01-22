import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";

export interface Executor {
  execute(op: Operation, evm: EVM);
}
