import { Operation } from "../../../types/src/Operation";

export interface DisassembledContract {
  hasConstructor: boolean;
  constructor: Operation[];
  runtime: Operation[];
  bytecode: string;
  runtimeBytecode: string;
}
