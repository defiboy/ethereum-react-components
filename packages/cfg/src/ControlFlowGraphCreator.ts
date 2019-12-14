import { CFGBlocks } from "./CFGBlocks";
import { Operation } from "../../types/src/Operation";
import { GFCResponse } from "./types";
import { DisassembledContract, Disassembler } from "./dissasembler";
import { EVMDisassembler } from "./EVMDisassembler";
import { CFGCreator, EthereumCFGCreator } from "./EthereumCFGCreator";
import { EVMExecutor } from "./evm/EVMExecutor";
import { OpcodeExecutor } from "./evm/exec/OpcodeExecutor";

export interface CFGContract {
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

export class ControlFlowGraphCreator {
  private disassembler: Disassembler
  private cfgCreator: CFGCreator
  private opExecutor: OpcodeExecutor

  constructor() {
    this.disassembler = new EVMDisassembler()
    this.cfgCreator = new EthereumCFGCreator()
    this.opExecutor = new OpcodeExecutor()
  }

  public async getCFGFromBytecode(bytecode: string): Promise<CFGContract> {
    try {
      const contractBlocks: CFGContract = this.buildCFGFromBytecode(bytecode)
      return contractBlocks
    } catch (err) {
      throw new Error(err.message);
    }
  }

  public buildCFGFromBytecode(bytecode: string): CFGContract {
    const contract: DisassembledContract = this.disassembler.disassembleContract(bytecode)
    return this.buildCfgContract(contract)
  }

  private buildCfgContract(contract: DisassembledContract): CFGContract {
    const runtimeBlocks = this.calculateCfgBlocks(contract.runtime)
    const cfgContract: CFGContract = {
      contractRuntime: {
        blocks: runtimeBlocks,
        bytecode: contract.runtime,
        rawBytecode: contract.runtimeBytecode
      }
    }
    if (contract.hasConstructor) {
      const constructorBlocks = this.calculateCfgBlocks(contract.constructor)
      cfgContract.contractConstructor = {
        blocks: constructorBlocks,
        bytecode: contract.constructor,
        rawBytecode: contract.bytecode
      }
    }
    return cfgContract
  }

  private calculateCfgBlocks(ops: Operation[]): CFGBlocks {
    // logger.info('Calculating CFG blocks')
    const blocks = this.cfgCreator.divideBlocks(ops)
    const executor = new EVMExecutor(blocks, this.opExecutor)
    executor.run(0)
    // logger.info('Calculated dynamic CFG, checking if there are orphan nodes not inspected...')
    executor.runOrphans()
    // logger.info(`Orphan blocks analyzed, tried to complete CFG inspecting bytecode`)
    return executor.blocks
  }
}
