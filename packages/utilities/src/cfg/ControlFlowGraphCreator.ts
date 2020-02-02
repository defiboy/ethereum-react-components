import { CFGBlocks, ControlFlowGraph, Operation, CompilerVersion } from "@ethereum-react/types";

import { DisassembledContract, EVMDisassembler, IDisassembler } from "../disassembler";
import { EVMExecutor } from "../evm";
import { getCFGBlocksFromOperations } from "./BlockCreator";

export class ControlFlowGraphCreator {
  private disassembler: IDisassembler;

  constructor() {
    this.disassembler = new EVMDisassembler();
  }

  public buildControlFlowGraphFromBytecode(bytecode: string): ControlFlowGraph {
    try {
      const disassembleContract: DisassembledContract = this.disassembler.disassembleContract(bytecode);
      const runtimeBlocks = this.getControlFlowGraphBlocks(disassembleContract.runtimeOperations);

      const controlFlowGraph: ControlFlowGraph = {
        contractRuntime: {
          blocks: runtimeBlocks,
          operations: disassembleContract.runtimeOperations,
          rawBytecode: disassembleContract.runtimeBytecode
        },
        contractConstructor: disassembleContract.hasConstructor
          ? {
            blocks: this.getControlFlowGraphBlocks(disassembleContract.constructorOperations),
            operations: disassembleContract.constructorOperations,
            rawBytecode: disassembleContract.bytecode
          }
          : undefined
      };
      return controlFlowGraph;
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public buildControlFlowGraph(bytecode: string, compilerVersion: CompilerVersion): ControlFlowGraph {
    try {
      const disassembleContract: DisassembledContract = this.disassembler.disassembleContract(
        bytecode,
        compilerVersion
      );
      const runtimeBlocks = this.getControlFlowGraphBlocks(disassembleContract.runtimeOperations);

      const controlFlowGraph: ControlFlowGraph = {
        contractRuntime: {
          blocks: runtimeBlocks,
          operations: disassembleContract.runtimeOperations,
          rawBytecode: disassembleContract.runtimeBytecode
        },
        contractConstructor: disassembleContract.hasConstructor
          ? {
            blocks: this.getControlFlowGraphBlocks(disassembleContract.constructorOperations),
            operations: disassembleContract.constructorOperations,
            rawBytecode: disassembleContract.bytecode
          }
          : undefined
      };
      return controlFlowGraph;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  private getControlFlowGraphBlocks(operations: Operation[]): CFGBlocks {
    const blocks = getCFGBlocksFromOperations(operations);
    const executor = new EVMExecutor(blocks);
    executor.run(0);
    // logger.info('Calculated dynamic CFG, checking if there are orphan nodes not inspected...')
    executor.runOrphans();
    // logger.info(`Orphan blocks analyzed, tried to complete CFG inspecting bytecode`)
    return executor.blocks;
  }
}
