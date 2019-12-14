import { EVM } from '../EVM'
import { Operation } from '../../../../types/src/Operation'

export interface Executor {
  execute(op: Operation, evm: EVM)
}
