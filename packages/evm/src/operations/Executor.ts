import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";

export interface Executor {
  execute(op: Operation, evm: EVM);
}
