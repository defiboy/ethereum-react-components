import { Operation } from '@ethereum-react-components/types'

import { EVM } from '../EVM'
import { Word } from '../Word'
import { Symbols } from '../Symbols'

import { Executor } from './Executor'

export class Address implements Executor {
  execute(op: Operation, evm: EVM) {
    evm.stack.push(Word.createSymbolic(Symbols.ADDRESS))
  }
}
