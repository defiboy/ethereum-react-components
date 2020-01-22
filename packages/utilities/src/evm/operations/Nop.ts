import { Operation } from "@ethereum-react/types";
import { EVM } from "../EVM";
import { Executor } from "./Executor";

export class Nop implements Executor {
  // tslint:disable-next-line
  public execute(op: Operation, evm: EVM) { }
}
