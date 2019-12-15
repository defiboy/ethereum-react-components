import { Operation } from "./Operation";
import { CFGBlocks } from "./CFGBlocks";

export interface ControlFlowGraph {
    contractConstructor?: {
        bytecode: Operation[]
        blocks: CFGBlocks,
        rawBytecode
    }
    contractRuntime: {
        bytecode: Operation[]
        blocks: CFGBlocks
        rawBytecode: string
    }
}