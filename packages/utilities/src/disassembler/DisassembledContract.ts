import { Operation } from "@ethereum-react/types";

export interface DisassembledContract {
  hasConstructor: boolean;
  constructorOperations: Operation[];
  runtimeOperations: Operation[];
  bytecode: string;
  runtimeBytecode: string;
}
