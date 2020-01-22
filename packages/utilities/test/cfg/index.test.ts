import { Operation, Opcodes, CFGBlocks } from '@ethereum-react/types'

import { EVMDisassembler, IDisassembler } from '../../src/disassembler'
import { getCFGBlocksFromOperations } from '../../src'

const BN = require('bn.js')

describe('CFG utilities tests', () => {
    let disassembler: IDisassembler

    beforeAll(() => {
        disassembler = new EVMDisassembler()
    })

    describe('getCFGBlocksFromOperations', () => {
        test('blocks correctly created, no jumps', () => {
            const bytecode = '60806040'
            const operations: Operation[] = disassembler.disassembleBytecode(bytecode)
            const blocks: CFGBlocks = getCFGBlocksFromOperations(operations)

            const expectedBlocks: CFGBlocks = new CFGBlocks()
            expectedBlocks.push(
                {
                    offset: 0,
                    operations: [createOperation('PUSH1', '80', 0), createOperation('PUSH1', '40', 2)]
                },
                0
            )
            expect(blocks.length()).toEqual(1)
            expect(blocks).toEqual(expectedBlocks)
        })

        test('blocks correctly created, JUMP(0x56)', () => {
            const bytecode = '60806040565b5050'
            const operations: Operation[] = disassembler.disassembleBytecode(bytecode)
            const blocks: CFGBlocks = getCFGBlocksFromOperations(operations)

            const expectedBlocks: CFGBlocks = new CFGBlocks()
            expectedBlocks.push(
                {
                    offset: 0,
                    operations: [
                        createOperation('PUSH1', '80', 0),
                        createOperation('PUSH1', '40', 2),
                        createOperation('JUMP', '0', 4)
                    ]
                },
                0
            )
            expectedBlocks.push(
                {
                    offset: 5,
                    operations: [
                        createOperation('JUMPDEST', '0', 5),
                        createOperation('POP', '0', 6),
                        createOperation('POP', '0', 7)
                    ]
                },
                5
            )
            expect(blocks.length()).toEqual(2)
            expect(blocks).toEqual(expectedBlocks)
        })

        test('blocks correctly created, JUMPI(0x57)', () => {
            const bytecode = '60806040575b5050'
            const operations: Operation[] = disassembler.disassembleBytecode(bytecode)
            const blocks: CFGBlocks = getCFGBlocksFromOperations(operations)

            const expectedBlocks: CFGBlocks = new CFGBlocks()
            expectedBlocks.push(
                {
                    offset: 0,
                    operations: [
                        createOperation('PUSH1', '80', 0),
                        createOperation('PUSH1', '40', 2),
                        createOperation('JUMPI', '0', 4)
                    ]
                },
                0
            )
            expectedBlocks.push(
                {
                    offset: 5,
                    operations: [
                        createOperation('JUMPDEST', '0', 5),
                        createOperation('POP', '0', 6),
                        createOperation('POP', '0', 7)
                    ]
                },
                5
            )
            expect(blocks.length()).toEqual(2)
            expect(blocks).toEqual(expectedBlocks)
        })

        test('blocks correctly created, STOP(0x00)', () => {
            const bytecode = '60806040005050'
            const operations: Operation[] = disassembler.disassembleBytecode(bytecode)
            const blocks: CFGBlocks = getCFGBlocksFromOperations(operations)

            const expectedBlocks: CFGBlocks = new CFGBlocks()
            expectedBlocks.push(
                {
                    offset: 0,
                    operations: [
                        createOperation('PUSH1', '80', 0),
                        createOperation('PUSH1', '40', 2),
                        createOperation('STOP', '0', 4)
                    ]
                },
                0
            )
            expectedBlocks.push(
                {
                    offset: 5,
                    operations: [createOperation('POP', '0', 5), createOperation('POP', '0', 6)]
                },
                5
            )
            expect(blocks.length()).toEqual(2)
            expect(blocks).toEqual(expectedBlocks)
        })

        test('blocks correctly created, RETURN(0xf3)', () => {
            const bytecode = '60806040f35050'
            const operations: Operation[] = disassembler.disassembleBytecode(bytecode)
            const blocks: CFGBlocks = getCFGBlocksFromOperations(operations)

            const expectedBlocks: CFGBlocks = new CFGBlocks()
            expectedBlocks.push(
                {
                    offset: 0,
                    operations: [
                        createOperation('PUSH1', '80', 0),
                        createOperation('PUSH1', '40', 2),
                        createOperation('RETURN', '0', 4)
                    ]
                },
                0
            )
            expectedBlocks.push(
                {
                    offset: 5,
                    operations: [createOperation('POP', '0', 5), createOperation('POP', '0', 6)]
                },
                5
            )
            expect(blocks.length()).toEqual(2)
            expect(blocks).toEqual(expectedBlocks)
        })

        test('blocks correctly created, REVERT(0xfd)', () => {
            const bytecode = '60806040fd5050'
            const operations: Operation[] = disassembler.disassembleBytecode(bytecode)
            const blocks: CFGBlocks = getCFGBlocksFromOperations(operations)

            const expectedBlocks: CFGBlocks = new CFGBlocks()
            expectedBlocks.push(
                {
                    offset: 0,
                    operations: [
                        createOperation('PUSH1', '80', 0),
                        createOperation('PUSH1', '40', 2),
                        createOperation('REVERT', '0', 4)
                    ]
                },
                0
            )
            expectedBlocks.push(
                {
                    offset: 5,
                    operations: [createOperation('POP', '0', 5), createOperation('POP', '0', 6)]
                },
                5
            )
            expect(blocks.length()).toEqual(2)
            expect(blocks).toEqual(expectedBlocks)
        })

        test('blocks correctly created, INVALID(0xfe)', () => {
            const bytecode = '60806040fe5050'
            const operations: Operation[] = disassembler.disassembleBytecode(bytecode)
            const blocks: CFGBlocks = getCFGBlocksFromOperations(operations)

            const expectedBlocks: CFGBlocks = new CFGBlocks()
            expectedBlocks.push(
                {
                    offset: 0,
                    operations: [
                        createOperation('PUSH1', '80', 0),
                        createOperation('PUSH1', '40', 2),
                        createOperation('INVALID', '0', 4)
                    ]
                },
                0
            )
            expectedBlocks.push(
                {
                    offset: 5,
                    operations: [createOperation('POP', '0', 5), createOperation('POP', '0', 6)]
                },
                5
            )
            expect(blocks.length()).toEqual(2)
            expect(blocks).toEqual(expectedBlocks)
        })
    })

    const createOperation = (opcodeName: string, argument: string, offset: number): Operation => {
        return {
            offset: offset,
            argument: new BN(argument, 16),
            opcode: Opcodes.opcodes[opcodeName]
        }
    }
})