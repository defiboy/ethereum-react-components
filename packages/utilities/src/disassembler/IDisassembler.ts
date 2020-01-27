import { Operation, CompilerVersion } from "@ethereum-react/types";

import { DisassembledContract } from "./DisassembledContract";

export interface IDisassembler {
  disassembleContract(bytecode: string, compilerVersion?: CompilerVersion): DisassembledContract;
  disassembleBytecode(bytecode: string): Operation[];
}
