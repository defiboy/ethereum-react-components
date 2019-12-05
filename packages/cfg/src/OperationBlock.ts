import { Operation } from './Operation'

export interface OperationBlock {
  offset: number
  operations: Operation[]
  childA?: number
  childB?: number
}
