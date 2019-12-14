import { Executor } from './Executor'
import { EVM } from '../EVM'
import { Operation } from '@ethereum-react-components/types'

export class Nop implements Executor {
  execute(op: Operation, evm: EVM) { }
}
