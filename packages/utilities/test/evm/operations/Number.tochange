import { createExecutor, createEVMDisassembler } from './TestUtils'
import { EVMExecutor } from '../EVMExecutor'
import { EthereumCFGCreator } from '../../EthereumCFGCreator'
import { Disassembler } from '../../dissasembler'
import { OpcodeExecutor } from './OpcodeExecutor'
import { EVMDisassembler } from '../../EVMDisassembler'
import { Word } from '../Word'
import { Symbols } from '../Symbols'

describe('Number', () => {
  let cfgCreator: EthereumCFGCreator
  let disassembler: Disassembler
  let opcodeExecutor: OpcodeExecutor = new OpcodeExecutor()

  beforeEach(() => {
    cfgCreator = new EthereumCFGCreator()
    disassembler = createEVMDisassembler()
  })

  it('Test Number', () => {
    const bytecode = '604043'
    const executor: EVMExecutor = createExecutor(disassembler, bytecode, cfgCreator, opcodeExecutor)
    executor.run(0)
    expect(executor.evm.stack.get(0)).toEqual(Word.createSymbolic(Symbols.NUMBER))
    expect(executor.evm.stack.length()).toEqual(2)
  })
})
