import React, { useState } from 'react'
import styled from 'styled-components'

import { ControlFlowGraphCreator } from '@ethereum-react-components/cfg';
import { Operation, OperationBlock } from '@ethereum-react-components/types'

import { IDebuggerProps, Trace } from './types'
import { CFGraph } from './CFGraph'

import './styles.css'

export const Debugger: React.FC<IDebuggerProps> = (props: IDebuggerProps) => {
    const [memory, setMemory] = useState([])
    const [stack, setStack] = useState([])
    const [storage, setStorage] = useState({})
    const [gas, setGas] = useState(0)
    const [gasCost, setGasCost] = useState(0)
    const [blocks, setBlocks] = useState([])

    React.useEffect(() => {
        console.log("Use effect")
        const controlFlowGraph = new ControlFlowGraphCreator().buildControlFlowGraphFromBytecode(props.bytecode)
        setBlocks(controlFlowGraph.contractRuntime.blocks.values() as any as OperationBlock[])
    }, [])

    const onClick = (op: Operation) => {
        console.log("Operation clicked", op)

        if (props.traces) {
            const trace = props.traces.find((item: Trace) => {
                return item.pc === op.offset
            })

            setMemory(trace.memory)
            setStack(trace.stack)
            setStorage(trace.storage)
            setGas(trace.gas)
            setGasCost(trace.gasCost)
        }
    }

    return (
        <Container>
            <GraphContainer>
                <CFGraph trace={props.traces}
                    blocks={blocks}
                    operationSelected={(op) => onClick(op)} />
            </GraphContainer>
            <MemoryDiv>
                <h4>Memory</h4>
                {memory && memory.length > 0 && memory.map(item => {
                    return <p>{item}</p>
                })}
            </MemoryDiv>
            <StackDiv>
                <h4>Stack</h4>
                {stack && stack.length > 0 && stack.map(item => {
                    return <p>{item}</p>
                })}
            </StackDiv>
            <StorageDiv>
                <h4>Storage</h4>
                {storage && <StorageTable storage={storage}></StorageTable>}
            </StorageDiv>
        </Container>
    )
}

interface IStorageTableProps {
    storage: any
}

const StorageTable: React.FC<IStorageTableProps> = (props: IStorageTableProps) => {
    return <table>
        <thead>
            <tr>
                <td>Slot</td>
                <td>Value</td>
            </tr>
        </thead>
        <tbody>
            {Object.keys(props.storage).map((item, index) => {
                return <tr>
                    <td>{item}</td>
                    <td>{props.storage[item]}</td>
                </tr>
            })}
        </tbody>
    </table>
}

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 70% 15% 10%;
  grid-row-gap: 0.4px;
  grid-template-areas:
    'graph graph'
    'memory stack'
    'storage storage';
`

export const GraphContainer = styled.section`
  grid-area: graph;
`

export const DetailsContainer = styled.section`
  grid-area: details;
`

export const MemoryDiv = styled.section`
  grid-area: memory;
  font-size: 0.8em;
`

export const StackDiv = styled.section`
  grid-area: stack;
  font-size: 0.8em;
`

export const StorageDiv = styled.section`
  grid-area: storage;
  font-size: 0.8em;
`