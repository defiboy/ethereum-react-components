import { Disassembler, DisassembledContract } from './dissasembler'
import { Operation } from './Operation'
import { Opcodes } from './Opcodes'
import { Opcode } from './Opcode'

let BN = require('bn.js')

export class EVMDisassembler implements Disassembler {
  static readonly metadataPrefix = 'a165627a7a72305820'
  static readonly metadataPrefixV2 = 'a265627a7a72305820'

  disassembleContract(bytecode: string): DisassembledContract {
    let code = bytecode.trim()

    if (bytecode.startsWith('0x')) {
      code = bytecode.slice(2)
    }

    if (code.includes(EVMDisassembler.metadataPrefix)) {
      code = code.split(EVMDisassembler.metadataPrefix)[0]
    }
    if (code.includes(EVMDisassembler.metadataPrefixV2)) {
      code = code.split(EVMDisassembler.metadataPrefixV2)[0]
    }

    code = code.length % 2 !== 0 ? code.substr(0, code.length - 1) : code
    if (code.length % 2 !== 0) {
      throw new Error(`disassembleContract - Bad input, bytecode length not even: ${code}, length: ${code.length}`)
    }

    const operations: Operation[] = this.disassembleBytecode(bytecode)
    const hasConstructor = operations.filter(op => op.opcode.name === 'CODECOPY').length > 0
    let constructor = []
    let runtime = operations
    return {
      bytecode: bytecode,
      hasConstructor: hasConstructor,
      runtime: runtime,
      constructor: constructor,
      runtimeBytecode: ''
    } as DisassembledContract
  }

  disassembleBytecode(bytecode: string): Operation[] {
    let code = bytecode.trim()

    if (bytecode.startsWith('0x')) {
      code = bytecode.slice(2)
    }

    if (code.includes(EVMDisassembler.metadataPrefix)) {
      code = code.split(EVMDisassembler.metadataPrefix)[0]
    }

    if (code.includes(EVMDisassembler.metadataPrefixV2)) {
      code = code.split(EVMDisassembler.metadataPrefixV2)[0]
    }

    code = code.length % 2 !== 0 ? code.substr(0, code.length - 1) : code
    if (code.length % 2 !== 0) {
      throw new Error(`disassembleBytecode - Bad input, bytecode length not even: ${code}, length: ${code.length}`)
    }
    let offset = 0
    const operations = code.match(/.{1,2}/g)
    if (!operations) {
      throw new Error('No matches for operations')
    }
    const disassembledOperations: Operation[] = []

    for (let i = 0; i < operations.length; i++) {
      const code = operations[i]
      const opcode: Opcode = Opcodes.opcodes[parseInt(code, 16)] || Opcodes.opcodes[-1]
      if (this.isPush(opcode)) {
        const parameters = opcode.parameters
        const argument = `${operations.slice(i + 1, i + parameters + 1).join('')}`
        const operation = this.createOperation(offset, opcode, argument)
        disassembledOperations.push(operation)
        offset = offset + 1 + parameters
        i = i + parameters
      } else {
        const operation = this.createOperation(offset, opcode, '0')
        disassembledOperations.push(operation)
        offset++
      }
    }
    return disassembledOperations
  }

  static removeMetadata(bytecode: string): string {
    let splittedBytecode: string[] = bytecode.split(EVMDisassembler.metadataPrefix)
    if (splittedBytecode.length < 2) {
      splittedBytecode = bytecode.split(EVMDisassembler.metadataPrefix.toUpperCase())
    }
    if (splittedBytecode.length < 2) {
      splittedBytecode = bytecode.split(EVMDisassembler.metadataPrefixV2)
    }
    if (splittedBytecode.length < 2) {
      splittedBytecode = bytecode.split(EVMDisassembler.metadataPrefixV2.toLocaleUpperCase())
    }
    if (splittedBytecode.length < 2) {
      return bytecode
    }
    return splittedBytecode[0]
  }

  private createOperation(offset: number, opcode: Opcode, argument: string) {
    return {
      offset: offset,
      opcode: opcode,
      argument: new BN(argument, 16)
    } as Operation
  }

  private isPush(opcode: Opcode): boolean {
    return opcode.name.startsWith('PUSH')
  }
}
