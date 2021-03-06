import { Opcode, Opcodes, Operation, CompilerVersion } from "@ethereum-react/types";

import { DisassembledContract } from "./DisassembledContract";
import { getCleanedBytecode, getSplitOpCode } from "./Utils";
import { IDisassembler } from "./IDisassembler";

// tslint:disable-next-line
const BN = require("bn.js");

export class EVMDisassembler implements IDisassembler {
  public disassembleContract(
    bytecode: string,
    compilerVersion: CompilerVersion = CompilerVersion.SOLIDITY_4
  ): DisassembledContract {
    const code = getCleanedBytecode(bytecode);
    const operations: Operation[] = this.disassembleBytecode(code);
    const hasConstructor = operations.filter(op => op.opcode.name === "CODECOPY").length > 0;
    let constructor: Operation[] = [];
    let runtime = operations;
    if (hasConstructor) {
      const splitOpcode = getSplitOpCode(compilerVersion);
      const firstStopIndex = operations.findIndex(op => op.opcode.name === splitOpcode);
      constructor = operations.slice(0, firstStopIndex + 1);
      runtime = this.adjustRuntimeOffset(operations.slice(firstStopIndex + 1, operations.length));
    }
    return {
      bytecode,
      hasConstructor,
      runtimeOperations: runtime,
      constructorOperations: constructor
    } as DisassembledContract;
  }

  public disassembleBytecode(bytecode: string): Operation[] {
    const code = getCleanedBytecode(bytecode);
    let offset = 0;
    const operations = code.match(/.{1,2}/g);
    if (!operations) {
      throw new Error("No matches for operations");
    }
    const disassembledOperations: Operation[] = [];

    for (let i = 0; i < operations.length; i++) {
      const codeHere = operations[i];
      const opcode: Opcode = Opcodes.opcodes[parseInt(codeHere, 16)] || Opcodes.opcodes[-1];

      if (this.isPush(opcode)) {
        const parameters = opcode.parameters;
        const argument = `${operations.slice(i + 1, i + parameters + 1).join("")}`;
        const operation = this.createOperation(offset, opcode, argument);
        disassembledOperations.push(operation);
        offset = offset + 1 + parameters;
        i = i + parameters;
      } else {
        const operation = this.createOperation(offset, opcode, "0");
        disassembledOperations.push(operation);
        offset++;
      }
    }
    return disassembledOperations;
  }

  private createOperation(offset: number, opcode: Opcode, argument: string) {
    const result = {
      offset,
      opcode,
      argument: new BN(argument, 16)
    } as Operation;
    return result;
  }

  private isPush(opcode: Opcode): boolean {
    return opcode.name.startsWith("PUSH");
  }

  private adjustRuntimeOffset(operations: Operation[]) {
    const firstOffset = operations[0].offset;
    operations.forEach(op => (op.offset = op.offset - firstOffset));
    return operations;
  }
}
