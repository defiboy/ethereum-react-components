import { EVMDisassembler, IDisassembler } from '@ethereum-react-components/disassembler'
import { getCFGBlocksFromOperations } from '@ethereum-react-components/cfg-utilities'
import { Operation } from '@ethereum-react-components/types'

import { Word, Symbols, EVMExecutor } from '../../src'

describe('Add', () => {
  let disassembler: IDisassembler

  beforeEach(() => {
    disassembler = new EVMDisassembler()
  })

  test('Add', () => {
    const bytecode = '6020603101'
    const disassembledOperations: Operation[] = disassembler.disassembleBytecode(bytecode)
    const blocks = getCFGBlocksFromOperations(disassembledOperations)

    const executor: EVMExecutor = new EVMExecutor(blocks)
    executor.run(0)

    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral('51'))
    expect(executor.evm.stack.length()).toEqual(1)
  })

  test('Add overflow', () => {
    const bytecode = '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600101'
    const disassembledOperations: Operation[] = disassembler.disassembleBytecode(bytecode)
    const blocks = getCFGBlocksFromOperations(disassembledOperations)

    const executor: EVMExecutor = new EVMExecutor(blocks)
    executor.run(0)

    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral('00'))
    expect(executor.evm.stack.length()).toEqual(1)
  })

  test('Add overflow 2', () => {
    const bytecode = '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600201'
    const disassembledOperations: Operation[] = disassembler.disassembleBytecode(bytecode)
    const blocks = getCFGBlocksFromOperations(disassembledOperations)

    const executor: EVMExecutor = new EVMExecutor(blocks)
    executor.run(0)

    expect(executor.evm.stack.get(0)).toEqual(Word.createLiteral('01'))
    expect(executor.evm.stack.length()).toEqual(1)
  })

  test('Add overflow 3', () => {
    const bytecode = '7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8001'
    const disassembledOperations: Operation[] = disassembler.disassembleBytecode(bytecode)
    const blocks = getCFGBlocksFromOperations(disassembledOperations)

    const executor: EVMExecutor = new EVMExecutor(blocks)
    executor.run(0)

    expect(executor.evm.stack.get(0)).toEqual(
      Word.createLiteral('fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe')
    )
    expect(executor.evm.stack.length()).toEqual(1)
  })

  test('Add Symbolic', () => {
    const bytecode = '60203401'
    const disassembledOperations: Operation[] = disassembler.disassembleBytecode(bytecode)
    const blocks = getCFGBlocksFromOperations(disassembledOperations)

    const executor: EVMExecutor = new EVMExecutor(blocks)
    executor.run(0)

    expect(executor.evm.stack.get(0)).toEqual(Word.createSymbolic(Symbols.UNKNOWN))
    expect(executor.evm.stack.length()).toEqual(1)
  })
})
