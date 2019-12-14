import { Operation } from "@ethereum-react-components/types";

import { DisassembledContract } from "./DisassembledContract";

export interface Disassembler {
  disassembleContract(bytecode: string): DisassembledContract;
  disassembleBytecode(bytecode: string): Operation[];
}
