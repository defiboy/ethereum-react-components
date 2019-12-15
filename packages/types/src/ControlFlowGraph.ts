import { CFGBlocks } from "./CFGBlocks";
import { Operation } from "./Operation";

export interface ControlFlowGraph {
  contractConstructor?: {
    bytecode: Operation[];
    blocks: CFGBlocks;
    rawBytecode;
  };
  contractRuntime: {
    bytecode: Operation[];
    blocks: CFGBlocks;
    rawBytecode: string;
  };
}
