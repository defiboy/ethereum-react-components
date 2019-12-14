import { Operation } from "../../../types/src/Operation";
import { DisassembledContract } from "./DisassembledContract";

export interface Disassembler {
  disassembleContract(bytecode: string): DisassembledContract;
  disassembleBytecode(bytecode: string): Operation[];
}
