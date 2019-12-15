import {
  DisassembledContract,
  IDisassembler,
  EVMDisassembler
} from "@ethereum-react-components/disassembler";
import {
  Operation,
  CFGBlocks,
  ControlFlowGraph
} from "@ethereum-react-components/types";
import { getCFGBlocksFromOperations } from "@ethereum-react-components/cfg-utilities";
import { EVMExecutor } from "@ethereum-react-components/evm";

export class ControlFlowGraphCreator {
  private disassembler: IDisassembler;

  constructor() {
    this.disassembler = new EVMDisassembler();
  }

  public buildControlFlowGraphFromBytecode(bytecode: string): ControlFlowGraph {
    try {
      const disassembleContract: DisassembledContract = this.disassembler.disassembleContract(
        bytecode
      );
      const runtimeBlocks = this.getControlFlowGraphBlocks(
        disassembleContract.runtime
      );

      const controlFlowGraph: ControlFlowGraph = {
        contractRuntime: {
          blocks: runtimeBlocks,
          bytecode: disassembleContract.runtime,
          rawBytecode: disassembleContract.runtimeBytecode
        },
        contractConstructor: disassembleContract.hasConstructor
          ? {
              blocks: this.getControlFlowGraphBlocks(
                disassembleContract.constructor
              ),
              bytecode: disassembleContract.constructor,
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
