import { GFCResponse } from "./index"
import { Operation } from "./Operation"
import { CFGBlocks } from "./CFGBlocks"

interface CGG {
    contractRuntime: {
        bytecode: Operation[]
        blocks: CFGBlocks
        rawBytecode: string
    }
}


export class ControlFlowGraph {

    constructor() {

    }

    async getCFGFromBytecode(bytecode: string): Promise<GFCResponse> {
        try {
            const contractBlocks: CFG = this.cfgService.buildCFGFromBytecode(bytecode.request)
            const cfg = this.createCFG(contractBlocks)
            return this.buildResponse(contractBlocks, cfg)
        } catch (err) {
            logger.error(err)
            throw new Error(err.message)
        }
    }

    private createCFG(contractBlocks: CFGContract): string {
        let blocks = contractBlocks.contractRuntime.blocks
        return this.graphVizService.createDotFromBlocks(blocks, undefined)
    }

    private buildResponse(contractBlocks: CFGContract, cfg: string) {
        let opResponse: OperationResponse[] = contractBlocks.contractRuntime.bytecode.map(op => {
            return {
                offset: op.offset,
                opcode: op.opcode,
                argument: op.argument.toString(16),
                begin: op.begin,
                end: op.end
            }
        })
        return {
            cfg: cfg,
            operations: opResponse
        }
    }
}
