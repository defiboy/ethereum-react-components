import { EVM } from '../EVM'
import { Operation } from '@ethereum-react-components/types'

export interface Executor {
  execute(op: Operation, evm: EVM)
}
