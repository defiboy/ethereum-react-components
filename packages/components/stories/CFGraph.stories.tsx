import React from 'react'
import { CFGraph, ICFGraphProps } from '../src/CFGraph'
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs"
import { ControlFlowGraphCreator } from '@ethereum-react-components/cfg';
import { storiesOf } from '@storybook/react';
import { OperationBlock } from '@ethereum-react-components/types';
import { action } from '@storybook/addon-actions'
import { CFGBlocks } from '../../types/src/CFGBlocks';
import { DebugTrace } from '../../types/src/DebugTrace';

storiesOf('Task', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const bytecode = text('Bytecode', '')


    const blocks = {"blocks":{"0":{"offset":0,"operations":[{"offset":0,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"80"},{"offset":2,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"40"},{"offset":4,"opcode":{"name":"MSTORE","opcode":82,"parameters":0},"argument":"00"},{"offset":5,"opcode":{"name":"CALLVALUE","opcode":52,"parameters":0},"argument":"00"},{"offset":6,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":7,"opcode":{"name":"ISZERO","opcode":21,"parameters":0},"argument":"00"},{"offset":8,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"0f"},{"offset":10,"opcode":{"name":"JUMPI","opcode":87,"parameters":0},"argument":"00"}],"childA":15,"childB":11},"11":{"offset":11,"operations":[{"offset":11,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"00"},{"offset":13,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":14,"opcode":{"name":"REVERT","opcode":253,"parameters":0},"argument":"00"}]},"15":{"offset":15,"operations":[{"offset":15,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":16,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":17,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"04"},{"offset":19,"opcode":{"name":"CALLDATASIZE","opcode":54,"parameters":0},"argument":"00"},{"offset":20,"opcode":{"name":"LT","opcode":16,"parameters":0},"argument":"00"},{"offset":21,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"32"},{"offset":23,"opcode":{"name":"JUMPI","opcode":87,"parameters":0},"argument":"00"}],"childA":50,"childB":24},"24":{"offset":24,"operations":[{"offset":24,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"00"},{"offset":26,"opcode":{"name":"CALLDATALOAD","opcode":53,"parameters":0},"argument":"00"},{"offset":27,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"e0"},{"offset":29,"opcode":{"name":"SHR","opcode":28,"parameters":0},"argument":"00"},{"offset":30,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":31,"opcode":{"name":"PUSH4","opcode":99,"parameters":4},"argument":"60fe47b1"},{"offset":36,"opcode":{"name":"EQ","opcode":20,"parameters":0},"argument":"00"},{"offset":37,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"37"},{"offset":39,"opcode":{"name":"JUMPI","opcode":87,"parameters":0},"argument":"00"}],"childA":55,"childB":40},"40":{"offset":40,"operations":[{"offset":40,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":41,"opcode":{"name":"PUSH4","opcode":99,"parameters":4},"argument":"6d4ce63c"},{"offset":46,"opcode":{"name":"EQ","opcode":20,"parameters":0},"argument":"00"},{"offset":47,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"62"},{"offset":49,"opcode":{"name":"JUMPI","opcode":87,"parameters":0},"argument":"00"}],"childA":98,"childB":50},"50":{"offset":50,"operations":[{"offset":50,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":51,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"00"},{"offset":53,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":54,"opcode":{"name":"REVERT","opcode":253,"parameters":0},"argument":"00"}]},"55":{"offset":55,"operations":[{"offset":55,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":56,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"60"},{"offset":58,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"04"},{"offset":60,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":61,"opcode":{"name":"CALLDATASIZE","opcode":54,"parameters":0},"argument":"00"},{"offset":62,"opcode":{"name":"SUB","opcode":3,"parameters":0},"argument":"00"},{"offset":63,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"20"},{"offset":65,"opcode":{"name":"DUP2","opcode":129,"parameters":0},"argument":"00"},{"offset":66,"opcode":{"name":"LT","opcode":16,"parameters":0},"argument":"00"},{"offset":67,"opcode":{"name":"ISZERO","opcode":21,"parameters":0},"argument":"00"},{"offset":68,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"4b"},{"offset":70,"opcode":{"name":"JUMPI","opcode":87,"parameters":0},"argument":"00"}],"childA":75,"childB":71},"71":{"offset":71,"operations":[{"offset":71,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"00"},{"offset":73,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":74,"opcode":{"name":"REVERT","opcode":253,"parameters":0},"argument":"00"}]},"75":{"offset":75,"operations":[{"offset":75,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":76,"opcode":{"name":"DUP2","opcode":129,"parameters":0},"argument":"00"},{"offset":77,"opcode":{"name":"ADD","opcode":1,"parameters":0},"argument":"00"},{"offset":78,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":79,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":80,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":81,"opcode":{"name":"CALLDATALOAD","opcode":53,"parameters":0},"argument":"00"},{"offset":82,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":83,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"20"},{"offset":85,"opcode":{"name":"ADD","opcode":1,"parameters":0},"argument":"00"},{"offset":86,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":87,"opcode":{"name":"SWAP3","opcode":146,"parameters":0},"argument":"00"},{"offset":88,"opcode":{"name":"SWAP2","opcode":145,"parameters":0},"argument":"00"},{"offset":89,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":90,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":91,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":92,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":93,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"7e"},{"offset":95,"opcode":{"name":"JUMP","opcode":86,"parameters":0},"argument":"00"}],"childA":126},"96":{"offset":96,"operations":[{"offset":96,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":97,"opcode":{"name":"STOP","opcode":0,"parameters":0},"argument":"00"}]},"98":{"offset":98,"operations":[{"offset":98,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":99,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"68"},{"offset":101,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"88"},{"offset":103,"opcode":{"name":"JUMP","opcode":86,"parameters":0},"argument":"00"}],"childA":136},"104":{"offset":104,"operations":[{"offset":104,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":105,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"40"},{"offset":107,"opcode":{"name":"MLOAD","opcode":81,"parameters":0},"argument":"00"},{"offset":108,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":109,"opcode":{"name":"DUP3","opcode":130,"parameters":0},"argument":"00"},{"offset":110,"opcode":{"name":"DUP2","opcode":129,"parameters":0},"argument":"00"},{"offset":111,"opcode":{"name":"MSTORE","opcode":82,"parameters":0},"argument":"00"},{"offset":112,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"20"},{"offset":114,"opcode":{"name":"ADD","opcode":1,"parameters":0},"argument":"00"},{"offset":115,"opcode":{"name":"SWAP2","opcode":145,"parameters":0},"argument":"00"},{"offset":116,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":117,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":118,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"40"},{"offset":120,"opcode":{"name":"MLOAD","opcode":81,"parameters":0},"argument":"00"},{"offset":121,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":122,"opcode":{"name":"SWAP2","opcode":145,"parameters":0},"argument":"00"},{"offset":123,"opcode":{"name":"SUB","opcode":3,"parameters":0},"argument":"00"},{"offset":124,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":125,"opcode":{"name":"RETURN","opcode":243,"parameters":0},"argument":"00"}]},"126":{"offset":126,"operations":[{"offset":126,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":127,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":128,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"00"},{"offset":130,"opcode":{"name":"DUP2","opcode":129,"parameters":0},"argument":"00"},{"offset":131,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":132,"opcode":{"name":"SSTORE","opcode":85,"parameters":0},"argument":"00"},{"offset":133,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":134,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":135,"opcode":{"name":"JUMP","opcode":86,"parameters":0},"argument":"00"}],"childA":96},"136":{"offset":136,"operations":[{"offset":136,"opcode":{"name":"JUMPDEST","opcode":91,"parameters":0},"argument":"00"},{"offset":137,"opcode":{"name":"PUSH1","opcode":96,"parameters":1},"argument":"00"},{"offset":139,"opcode":{"name":"DUP1","opcode":128,"parameters":0},"argument":"00"},{"offset":140,"opcode":{"name":"SLOAD","opcode":84,"parameters":0},"argument":"00"},{"offset":141,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":142,"opcode":{"name":"POP","opcode":80,"parameters":0},"argument":"00"},{"offset":143,"opcode":{"name":"SWAP1","opcode":144,"parameters":0},"argument":"00"},{"offset":144,"opcode":{"name":"JUMP","opcode":86,"parameters":0},"argument":"00"}],"childA":104},"145":{"offset":145,"operations":[{"offset":145,"opcode":{"name":"INVALID","opcode":254,"parameters":0},"argument":"00"}]},"146":{"offset":146,"operations":[{"offset":146,"opcode":{"name":"LOG2","opcode":162,"parameters":0},"argument":"00"},{"offset":147,"opcode":{"name":"PUSH6","opcode":101,"parameters":6},"argument":"627a7a723158"},{"offset":154,"opcode":{"name":"SHA3","opcode":32,"parameters":0},"argument":"00"},{"offset":155,"opcode":{"name":"ADD","opcode":1,"parameters":0},"argument":"00"},{"offset":156,"opcode":{"name":"PUSH28","opcode":123,"parameters":28},"argument":"ecb3275c23ff18b912b30a37bb311ead27b1c9376137d7e082840b4c"},{"offset":185,"opcode":{"name":"UNKNOWN","opcode":0,"parameters":0},"argument":"00"},{"offset":186,"opcode":{"name":"JUMP","opcode":86,"parameters":0},"argument":"00"}]},"187":{"offset":187,"operations":[{"offset":187,"opcode":{"name":"PUSH5","opcode":100,"parameters":5},"argument":"736f6c6343"},{"offset":193,"opcode":{"name":"STOP","opcode":0,"parameters":0},"argument":"00"}]},"194":{"offset":194,"operations":[{"offset":194,"opcode":{"name":"SDIV","opcode":5,"parameters":0},"argument":"00"},{"offset":195,"opcode":{"name":"UNKNOWN","opcode":0,"parameters":0},"argument":"00"},{"offset":196,"opcode":{"name":"STOP","opcode":0,"parameters":0},"argument":"00"}]},"197":{"offset":197,"operations":[{"offset":197,"opcode":{"name":"ORIGIN","opcode":50,"parameters":0},"argument":"00"}]}}}


      // blocks: [
      //   {
      //     offset: 0,
      //     operations: [
      //       {
      //         offset: 0,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '80'
      //       },
      //       {
      //         offset: 2,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '40'
      //       },
      //       {
      //         offset: 4,
      //         opcode: {
      //           name: 'MSTORE',
      //           opcode: 82,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 5,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '4'
      //       },
      //       {
      //         offset: 7,
      //         opcode: {
      //           name: 'CALLDATASIZE',
      //           opcode: 54,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 8,
      //         opcode: {
      //           name: 'LT',
      //           opcode: 16,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 9,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '3f'
      //       },
      //       {
      //         offset: 11,
      //         opcode: {
      //           name: 'JUMPI',
      //           opcode: 87,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ],
      //     childA: 63,
      //     childB: 12
      //   },
      //   {
      //     offset: 12,
      //     operations: [
      //       {
      //         offset: 12,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 14,
      //         opcode: {
      //           name: 'CALLDATALOAD',
      //           opcode: 53,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 15,
      //         opcode: {
      //           name: 'PUSH29',
      //           opcode: 124,
      //           parameters: 29
      //         },
      //         argument: '100000000000000000000000000000000000000000000000000000000'
      //       },
      //       {
      //         offset: 45,
      //         opcode: {
      //           name: 'SWAP1',
      //           opcode: 144,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 46,
      //         opcode: {
      //           name: 'DIV',
      //           opcode: 4,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 47,
      //         opcode: {
      //           name: 'PUSH4',
      //           opcode: 99,
      //           parameters: 4
      //         },
      //         argument: 'ffffffff'
      //       },
      //       {
      //         offset: 52,
      //         opcode: {
      //           name: 'AND',
      //           opcode: 22,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 53,
      //         opcode: {
      //           name: 'DUP1',
      //           opcode: 128,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 54,
      //         opcode: {
      //           name: 'PUSH4',
      //           opcode: 99,
      //           parameters: 4
      //         },
      //         argument: 'e2179b8e'
      //       },
      //       {
      //         offset: 59,
      //         opcode: {
      //           name: 'EQ',
      //           opcode: 20,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 60,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '44'
      //       },
      //       {
      //         offset: 62,
      //         opcode: {
      //           name: 'JUMPI',
      //           opcode: 87,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ],
      //     childA: 68,
      //     childB: 63
      //   },
      //   {
      //     offset: 63,
      //     operations: [
      //       {
      //         offset: 63,
      //         opcode: {
      //           name: 'JUMPDEST',
      //           opcode: 91,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 64,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 66,
      //         opcode: {
      //           name: 'DUP1',
      //           opcode: 128,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 67,
      //         opcode: {
      //           name: 'REVERT',
      //           opcode: 253,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ]
      //   },
      //   {
      //     offset: 68,
      //     operations: [
      //       {
      //         offset: 68,
      //         opcode: {
      //           name: 'JUMPDEST',
      //           opcode: 91,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 69,
      //         opcode: {
      //           name: 'CALLVALUE',
      //           opcode: 52,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 70,
      //         opcode: {
      //           name: 'DUP1',
      //           opcode: 128,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 71,
      //         opcode: {
      //           name: 'ISZERO',
      //           opcode: 21,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 72,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '4f'
      //       },
      //       {
      //         offset: 74,
      //         opcode: {
      //           name: 'JUMPI',
      //           opcode: 87,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ],
      //     childA: 79,
      //     childB: 75
      //   },
      //   {
      //     offset: 75,
      //     operations: [
      //       {
      //         offset: 75,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 77,
      //         opcode: {
      //           name: 'DUP1',
      //           opcode: 128,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 78,
      //         opcode: {
      //           name: 'REVERT',
      //           opcode: 253,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ]
      //   },
      //   {
      //     offset: 79,
      //     operations: [
      //       {
      //         offset: 79,
      //         opcode: {
      //           name: 'JUMPDEST',
      //           opcode: 91,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 80,
      //         opcode: {
      //           name: 'POP',
      //           opcode: 80,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 81,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '56'
      //       },
      //       {
      //         offset: 83,
      //         opcode: {
      //           name: 'PUSH1',
      //           opcode: 96,
      //           parameters: 1
      //         },
      //         argument: '58'
      //       },
      //       {
      //         offset: 85,
      //         opcode: {
      //           name: 'JUMP',
      //           opcode: 86,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ],
      //     childA: 88
      //   },
      //   {
      //     offset: 86,
      //     operations: [
      //       {
      //         offset: 86,
      //         opcode: {
      //           name: 'JUMPDEST',
      //           opcode: 91,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 87,
      //         opcode: {
      //           name: 'STOP',
      //           opcode: 0,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ]
      //   },
      //   {
      //     offset: 88,
      //     operations: [
      //       {
      //         offset: 88,
      //         opcode: {
      //           name: 'JUMPDEST',
      //           opcode: 91,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       },
      //       {
      //         offset: 89,
      //         opcode: {
      //           name: 'JUMP',
      //           opcode: 86,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ],
      //     childA: 86
      //   },
      //   {
      //     offset: 90,
      //     operations: [
      //       {
      //         offset: 90,
      //         opcode: {
      //           name: 'STOP',
      //           opcode: 0,
      //           parameters: 0
      //         },
      //         argument: '0'
      //       }
      //     ]
      //   }
      // ]
    

    const flow = bytecode ? new ControlFlowGraphCreator().buildControlFlowGraphFromBytecode(
      bytecode
    ) : ''


    const trace: Array<{
        depth: number;
        error?: any;
        gas: string;
        gasCost: string;
        memory: string[];
        op: string;
        pc: number;
        stack?: string[];
        storage?: any;
      }>
     = [
      {
         "stack":[
   
         ],
         "memory":[
   
         ],
         "op":"PUSH1",
         "pc":0,
         "gasCost":"3",
         "gas":"2978536",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000080"
         ],
         "memory":[
   
         ],
         "op":"PUSH1",
         "pc":2,
         "gasCost":"3",
         "gas":"2978533",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000080",
            "0x0000000000000000000000000000000000000000000000000000000000000040"
         ],
         "memory":[
   
         ],
         "op":"MSTORE",
         "pc":4,
         "gasCost":"3",
         "gas":"2978530",
         "depth":1
      },
      {
         "stack":[
   
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"CALLVALUE",
         "pc":5,
         "gasCost":"2",
         "gas":"2978518",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP1",
         "pc":6,
         "gasCost":"3",
         "gas":"2978516",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"ISZERO",
         "pc":7,
         "gasCost":"3",
         "gas":"2978513",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":8,
         "gasCost":"3",
         "gas":"2978510",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            "0x000000000000000000000000000000000000000000000000000000000000000f"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPI",
         "pc":10,
         "gasCost":"10",
         "gas":"2978507",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPDEST",
         "pc":15,
         "gasCost":"1",
         "gas":"2978497",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"POP",
         "pc":16,
         "gasCost":"2",
         "gas":"2978496",
         "depth":1
      },
      {
         "stack":[
   
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":17,
         "gasCost":"3",
         "gas":"2978494",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"CALLDATASIZE",
         "pc":19,
         "gasCost":"2",
         "gas":"2978491",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000024"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"LT",
         "pc":20,
         "gasCost":"3",
         "gas":"2978489",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":21,
         "gasCost":"3",
         "gas":"2978486",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x0000000000000000000000000000000000000000000000000000000000000032"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPI",
         "pc":23,
         "gasCost":"10",
         "gas":"2978483",
         "depth":1
      },
      {
         "stack":[
   
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":24,
         "gasCost":"3",
         "gas":"2978473",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"CALLDATALOAD",
         "pc":26,
         "gasCost":"3",
         "gas":"2978470",
         "depth":1
      },
      {
         "stack":[
            "0x60fe47b100000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":27,
         "gasCost":"3",
         "gas":"2978467",
         "depth":1
      },
      {
         "stack":[
            "0x60fe47b100000000000000000000000000000000000000000000000000000000",
            "0x00000000000000000000000000000000000000000000000000000000000000e0"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SHR",
         "pc":29,
         "gasCost":"3",
         "gas":"2978464",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP1",
         "pc":30,
         "gasCost":"3",
         "gas":"2978461",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH4",
         "pc":31,
         "gasCost":"3",
         "gas":"2978458",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"EQ",
         "pc":36,
         "gasCost":"3",
         "gas":"2978455",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":37,
         "gasCost":"3",
         "gas":"2978452",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            "0x0000000000000000000000000000000000000000000000000000000000000037"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPI",
         "pc":39,
         "gasCost":"10",
         "gas":"2978449",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPDEST",
         "pc":55,
         "gasCost":"1",
         "gas":"2978439",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":56,
         "gasCost":"3",
         "gas":"2978438",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":58,
         "gasCost":"3",
         "gas":"2978435",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP1",
         "pc":60,
         "gasCost":"3",
         "gas":"2978432",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"CALLDATASIZE",
         "pc":61,
         "gasCost":"2",
         "gas":"2978429",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000024"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SUB",
         "pc":62,
         "gasCost":"3",
         "gas":"2978427",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":63,
         "gasCost":"3",
         "gas":"2978424",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020",
            "0x0000000000000000000000000000000000000000000000000000000000000020"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP2",
         "pc":65,
         "gasCost":"3",
         "gas":"2978421",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020",
            "0x0000000000000000000000000000000000000000000000000000000000000020",
            "0x0000000000000000000000000000000000000000000000000000000000000020"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"LT",
         "pc":66,
         "gasCost":"3",
         "gas":"2978418",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020",
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"ISZERO",
         "pc":67,
         "gasCost":"3",
         "gas":"2978415",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020",
            "0x0000000000000000000000000000000000000000000000000000000000000001"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":68,
         "gasCost":"3",
         "gas":"2978412",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020",
            "0x0000000000000000000000000000000000000000000000000000000000000001",
            "0x000000000000000000000000000000000000000000000000000000000000004b"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPI",
         "pc":70,
         "gasCost":"10",
         "gas":"2978409",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPDEST",
         "pc":75,
         "gasCost":"1",
         "gas":"2978399",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP2",
         "pc":76,
         "gasCost":"3",
         "gas":"2978398",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"ADD",
         "pc":77,
         "gasCost":"3",
         "gas":"2978395",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000024"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SWAP1",
         "pc":78,
         "gasCost":"3",
         "gas":"2978392",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP1",
         "pc":79,
         "gasCost":"3",
         "gas":"2978389",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP1",
         "pc":80,
         "gasCost":"3",
         "gas":"2978386",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"CALLDATALOAD",
         "pc":81,
         "gasCost":"3",
         "gas":"2978383",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SWAP1",
         "pc":82,
         "gasCost":"3",
         "gas":"2978380",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":83,
         "gasCost":"3",
         "gas":"2978377",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000020"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"ADD",
         "pc":85,
         "gasCost":"3",
         "gas":"2978374",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000024"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SWAP1",
         "pc":86,
         "gasCost":"3",
         "gas":"2978371",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SWAP3",
         "pc":87,
         "gasCost":"3",
         "gas":"2978368",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000024"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SWAP2",
         "pc":88,
         "gasCost":"3",
         "gas":"2978365",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SWAP1",
         "pc":89,
         "gasCost":"3",
         "gas":"2978362",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004",
            "0x0000000000000000000000000000000000000000000000000000000000000024"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"POP",
         "pc":90,
         "gasCost":"2",
         "gas":"2978359",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000024",
            "0x0000000000000000000000000000000000000000000000000000000000000004"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"POP",
         "pc":91,
         "gasCost":"2",
         "gas":"2978357",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000024"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"POP",
         "pc":92,
         "gasCost":"2",
         "gas":"2978355",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":93,
         "gasCost":"3",
         "gas":"2978353",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x000000000000000000000000000000000000000000000000000000000000007e"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMP",
         "pc":95,
         "gasCost":"8",
         "gas":"2978350",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPDEST",
         "pc":126,
         "gasCost":"1",
         "gas":"2978342",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP1",
         "pc":127,
         "gasCost":"3",
         "gas":"2978341",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"PUSH1",
         "pc":128,
         "gasCost":"3",
         "gas":"2978338",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"DUP2",
         "pc":130,
         "gasCost":"3",
         "gas":"2978335",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000000",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SWAP1",
         "pc":131,
         "gasCost":"3",
         "gas":"2978332",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x0000000000000000000000000000000000000000000000000000000000000000"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"SSTORE",
         "pc":132,
         "gasCost":"0",
         "gas":"2978329",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"POP",
         "pc":133,
         "gasCost":"2",
         "gas":"2958329",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060",
            "0x000000000000000000000000000000000000000000000000000000000000000c"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"POP",
         "pc":134,
         "gasCost":"2",
         "gas":"2958327",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1",
            "0x0000000000000000000000000000000000000000000000000000000000000060"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMP",
         "pc":135,
         "gasCost":"8",
         "gas":"2958325",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"JUMPDEST",
         "pc":96,
         "gasCost":"1",
         "gas":"2958317",
         "depth":1
      },
      {
         "stack":[
            "0x0000000000000000000000000000000000000000000000000000000060fe47b1"
         ],
         "memory":[
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000000",
            "00000000000000000000000000000080"
         ],
         "op":"STOP",
         "pc":97,
         "gasCost":"0",
         "gas":"2958316",
         "depth":1,
         "error":false
      }
   ]

   const props: ICFGraphProps = {
    operationSelected: (op) => action('Operation selected')(op),
    blocks: Object.values(blocks.blocks),
    trace
   }

    // const props: ICFGraphProps = {
    //   blocks: flow.contractRuntime.blocks.values() as any as OperationBlock[]
    // }
    return <React.Fragment>{text('Bytecode', '')} <CFGraph {...props} /></React.Fragment>
  })

