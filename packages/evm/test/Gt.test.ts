import { createExecutor, createEVMDisassembler } from './TestUtils'
import { EVMExecutor } from '../EVMExecutor'
import { EthereumCFGCreator } from '../../../cfg/EthereumCFGCreator'
import { Disassembler } from '../../../bytecode/Disassembler'
import { OpcodeExecutor } from './OpcodeExecutor'
import { EVMDisassembler } from '../../../bytecode/EVMDisassembler'
import { Word } from '../Word'
import { Symbols } from '../Symbols'

describe('GT', () => {
  let cfgCreator: EthereumCFGCreator
  let disassembler: Disassembler
  let opcodeExecutor: OpcodeExecutor = new OpcodeExecutor()

  beforeEach(() => {
    cfgCreator = new EthereumCFGCreator()
    disassembler = createEVMDisassembler()
  })

  it('Test GT true', () => {
    const bytecode = '6001600211'
    const executor: EVMExecutor = createExecutor(disassembler, bytecode, cfgCreator, opcodeExecutor)
    executor.run(0)
    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral('01'))
    expect(executor.evm.stack.length()).toEqual(1)
  })

  it('Test GT false', () => {
    const bytecode = '6002600111'
    const executor: EVMExecutor = createExecutor(disassembler, bytecode, cfgCreator, opcodeExecutor)
    executor.run(0)
    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral('00'))
    expect(executor.evm.stack.length()).toEqual(1)
  })

  it('Test GT false - equals', () => {
    const bytecode = '6001600111'
    const executor: EVMExecutor = createExecutor(disassembler, bytecode, cfgCreator, opcodeExecutor)
    executor.run(0)
    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral('00'))
    expect(executor.evm.stack.length()).toEqual(1)
  })

  it('Test GT Symbolic', () => {
    const bytecode = '60203411'
    const executor: EVMExecutor = createExecutor(disassembler, bytecode, cfgCreator, opcodeExecutor)
    executor.run(0)
    expect(executor.evm.stack.get(0)).toEqual(Word.createSymbolic(Symbols.UNKNOWN))
    expect(executor.evm.stack.length()).toEqual(1)
  })
})
