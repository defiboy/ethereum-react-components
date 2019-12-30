import { OperationBlock, Operation } from '@ethereum-react-components/types'

export interface IDebuggerProps {
    bytecode: string
    traces: Array<Trace>
}

export interface Trace {
    depth: number
    error?: any
    gas: number
    gasCost: number
    memory: string[]
    op: string
    pc: number
    stack?: string[]
    storage?: any
}

export interface ICFGraphProps {
    blocks: OperationBlock[]
    trace?: Array<Trace>
    options?: IGraphOptions
    operationSelected?: (op: Operation) => void
}

export interface IGraphOptions {
    dir: 'LR' | 'TB'
}
