import { CFGBlocks } from "./CFGBlocks";
import { GFCResponse } from "./index";
import { Operation } from "./Operation";

interface CGG {
  contractRuntime: {
    bytecode: Operation[];
    blocks: CFGBlocks;
    rawBytecode: string;
  };
}

export class ControlFlowGraph {
  public async getCFGFromBytecode(bytecode: string): Promise<GFCResponse> {
    try {
      const contractBlocks: CFG = this.cfgService.buildCFGFromBytecode(
        bytecode.request
      );
      const cfg = this.createCFG(contractBlocks);
      return this.buildResponse(contractBlocks, cfg);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  private createCFG(contractBlocks: CFGContract): string {
    const blocks = contractBlocks.contractRuntime.blocks;
    return this.graphVizService.createDotFromBlocks(blocks, undefined);
  }

  private buildResponse(contractBlocks: CFGContract, cfg: string) {
    const opResponse: OperationResponse[] = contractBlocks.contractRuntime.bytecode.map(
      op => {
        return {
          offset: op.offset,
          opcode: op.opcode,
          argument: op.argument.toString(16),
          begin: op.begin,
          end: op.end
        };
      }
    );
    return {
      cfg,
      operations: opResponse
    };
  }
}
