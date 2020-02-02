import { CFGBlocks } from "./CFGBlocks";
import { Operation } from "./Operation";

export interface ControlFlowGraph {
  contractConstructor?: {
    operations: Operation[];
    blocks: CFGBlocks;
    rawBytecode;
  };
  contractRuntime: {
    operations: Operation[];
    blocks: CFGBlocks;
    rawBytecode: string;
  };
}
