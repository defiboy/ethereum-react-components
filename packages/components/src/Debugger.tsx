import React, { useState } from 'react'
import styled from 'styled-components'

import { Operation, CFGBlocks, TransactionTrace, StructLog } from '@ethereum-react/types'
import { CFGraph } from './CFGraph'

export interface IDebuggerProps {
  blocks: CFGBlocks
  transactionTrace?: TransactionTrace
  renderTrigger?: any
  transactionHash?: string
  operationSelected?: (op: Operation) => void
}

export const Debugger: React.FC<IDebuggerProps> = (props: IDebuggerProps) => {
  const [memory, setMemory] = useState([])
  const [stack, setStack] = useState([])
  const [storage, setStorage] = useState(undefined) // {}
  const [gas, setGas] = useState(0)
  const [gasCost, setGasCost] = useState(0)

  const onClick = (op: Operation) => {
    console.log('Operation clicked', op)

    if (props.transactionTrace && props.transactionTrace.structLogs.length > 0) {
      const trace = props.transactionTrace.structLogs.find((item: StructLog) => {
        return item.pc === op.offset
      })

      if (props.operationSelected) {
        props.operationSelected(op)
      }

      setMemory(trace.memory)
      setStack(trace.stack)
      setStorage(trace.storage)
      setGas(trace.gas)
      setGasCost(trace.gasCost)
    }
  }

  const hasTraces = props.transactionTrace && props.transactionTrace.structLogs.length > 0

  return (
    <Container transactionTrace={props.transactionTrace}>
      {props.transactionHash && <h4>Transaction hash: {props.transactionHash}</h4>}
      <GraphContainer>
        <CFGraph
          renderTrigger={props.renderTrigger}
          trace={props.transactionTrace}
          blocks={props.blocks}
          operationSelected={op => onClick(op)}
        />
      </GraphContainer>

      {hasTraces && (
        <MemoryDiv>
          <h6 style={{ fontWeight: 'bold' }}>Memory</h6>
          {memory.length > 0 && memory.map((item, index) => <p key={index}>{item}</p>)}
        </MemoryDiv>
      )}

      {hasTraces && (
        <StackDiv>
          <h6 style={{ fontWeight: 'bold' }}>Stack</h6>
          {stack.length > 0 && stack.map((item, index) => <p key={index}>{item}</p>)}
        </StackDiv>
      )}

      {hasTraces && (
        <StorageDiv>
          <h6 style={{ fontWeight: 'bold' }}>Storage</h6>
          {storage && <StorageTable storage={storage} />}
        </StorageDiv>
      )}
    </Container>
  )
}

interface IStorageTableProps {
  storage: any
}

const StorageTable: React.FC<IStorageTableProps> = (props: IStorageTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>Slot</td>
          <td>Value</td>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.storage).map((item, index) => {
          return (
            <tr key={index}>
              <td>{item}</td>
              <td>{props.storage[item]}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 16% 32% auto;
  grid-template-rows: ${props =>
    props.transactionTrace && props.transactionTrace.structLogs.length > 0 ? '75% 25%;' : '100% 0;'}
  grid-row-gap: 0.4px;
  grid-template-areas:
    'graph graph graph graph'
    'memory stack storage storage';
`

export const GraphContainer = styled.section`
  grid-area: graph;
  height: 100%;
  width: 100%;
  border: 1px;
`

export const DetailsContainer = styled.section`
  grid-area: details;
`

export const MemoryDiv = styled.section`
  margin-top: 1em;
  grid-area: memory;
  font-size: 0.7em;
  height: 101%;
  overflow: scroll;
  width: 100%;
`

export const StackDiv = styled.section`
  margin-top: 1em;
  grid-area: stack;
  height: 101%;
  font-size: 0.7em;
  overflow: scroll;
  width: 100%;
`

export const StorageDiv = styled.section`
  grid-area: storage;
  margin-top: 1em;
  font-size: 0.7em;
  overflow: scroll;
  width: 100%;
  height: 101%;
`
