import { Operation } from '@ethereum-react-components/types'

export interface DisassembledContract {
  hasConstructor: boolean;
  constructor: Operation[];
  runtime: Operation[];
  bytecode: string;
  runtimeBytecode: string;
}
