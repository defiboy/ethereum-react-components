import React from 'react'
import { CFGraph, ICFGraphProps } from '../src/CFGraph'

export default {
  title: 'CFG'
}

const props: ICFGraphProps = {
  blocks: [
    {
      offset: 0,
      operations: [
        {
          offset: 0,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '80'
        },
        {
          offset: 2,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '40'
        },
        {
          offset: 4,
          opcode: {
            name: 'MSTORE',
            opcode: 82,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 5,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '4'
        },
        {
          offset: 7,
          opcode: {
            name: 'CALLDATASIZE',
            opcode: 54,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 8,
          opcode: {
            name: 'LT',
            opcode: 16,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 9,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '3f'
        },
        {
          offset: 11,
          opcode: {
            name: 'JUMPI',
            opcode: 87,
            parameters: 0
          },
          argument: '0'
        }
      ],
      childA: 63,
      childB: 12
    },
    {
      offset: 12,
      operations: [
        {
          offset: 12,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '0'
        },
        {
          offset: 14,
          opcode: {
            name: 'CALLDATALOAD',
            opcode: 53,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 15,
          opcode: {
            name: 'PUSH29',
            opcode: 124,
            parameters: 29
          },
          argument: '100000000000000000000000000000000000000000000000000000000'
        },
        {
          offset: 45,
          opcode: {
            name: 'SWAP1',
            opcode: 144,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 46,
          opcode: {
            name: 'DIV',
            opcode: 4,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 47,
          opcode: {
            name: 'PUSH4',
            opcode: 99,
            parameters: 4
          },
          argument: 'ffffffff'
        },
        {
          offset: 52,
          opcode: {
            name: 'AND',
            opcode: 22,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 53,
          opcode: {
            name: 'DUP1',
            opcode: 128,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 54,
          opcode: {
            name: 'PUSH4',
            opcode: 99,
            parameters: 4
          },
          argument: 'e2179b8e'
        },
        {
          offset: 59,
          opcode: {
            name: 'EQ',
            opcode: 20,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 60,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '44'
        },
        {
          offset: 62,
          opcode: {
            name: 'JUMPI',
            opcode: 87,
            parameters: 0
          },
          argument: '0'
        }
      ],
      childA: 68,
      childB: 63
    },
    {
      offset: 63,
      operations: [
        {
          offset: 63,
          opcode: {
            name: 'JUMPDEST',
            opcode: 91,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 64,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '0'
        },
        {
          offset: 66,
          opcode: {
            name: 'DUP1',
            opcode: 128,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 67,
          opcode: {
            name: 'REVERT',
            opcode: 253,
            parameters: 0
          },
          argument: '0'
        }
      ]
    },
    {
      offset: 68,
      operations: [
        {
          offset: 68,
          opcode: {
            name: 'JUMPDEST',
            opcode: 91,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 69,
          opcode: {
            name: 'CALLVALUE',
            opcode: 52,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 70,
          opcode: {
            name: 'DUP1',
            opcode: 128,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 71,
          opcode: {
            name: 'ISZERO',
            opcode: 21,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 72,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '4f'
        },
        {
          offset: 74,
          opcode: {
            name: 'JUMPI',
            opcode: 87,
            parameters: 0
          },
          argument: '0'
        }
      ],
      childA: 79,
      childB: 75
    },
    {
      offset: 75,
      operations: [
        {
          offset: 75,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '0'
        },
        {
          offset: 77,
          opcode: {
            name: 'DUP1',
            opcode: 128,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 78,
          opcode: {
            name: 'REVERT',
            opcode: 253,
            parameters: 0
          },
          argument: '0'
        }
      ]
    },
    {
      offset: 79,
      operations: [
        {
          offset: 79,
          opcode: {
            name: 'JUMPDEST',
            opcode: 91,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 80,
          opcode: {
            name: 'POP',
            opcode: 80,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 81,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '56'
        },
        {
          offset: 83,
          opcode: {
            name: 'PUSH1',
            opcode: 96,
            parameters: 1
          },
          argument: '58'
        },
        {
          offset: 85,
          opcode: {
            name: 'JUMP',
            opcode: 86,
            parameters: 0
          },
          argument: '0'
        }
      ],
      childA: 88
    },
    {
      offset: 86,
      operations: [
        {
          offset: 86,
          opcode: {
            name: 'JUMPDEST',
            opcode: 91,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 87,
          opcode: {
            name: 'STOP',
            opcode: 0,
            parameters: 0
          },
          argument: '0'
        }
      ]
    },
    {
      offset: 88,
      operations: [
        {
          offset: 88,
          opcode: {
            name: 'JUMPDEST',
            opcode: 91,
            parameters: 0
          },
          argument: '0'
        },
        {
          offset: 89,
          opcode: {
            name: 'JUMP',
            opcode: 86,
            parameters: 0
          },
          argument: '0'
        }
      ],
      childA: 86
    },
    {
      offset: 90,
      operations: [
        {
          offset: 90,
          opcode: {
            name: 'STOP',
            opcode: 0,
            parameters: 0
          },
          argument: '0'
        }
      ]
    }
  ]
}

export const text = () => <CFGraph {...props} />
