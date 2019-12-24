import * as React from 'react'
import dagreD3 from 'dagre-d3'
import * as d3 from 'd3'
import styled from 'styled-components'
import { OperationBlock, Operation } from '@ethereum-react-components/types'

export interface ICFGraphProps {
  blocks: OperationBlock[]
  trace?: Array<{
    depth: number
    error?: any
    gas: string
    gasCost: string
    memory: string[]
    op: string
    pc: number
    stack?: string[]
    storage?: any
  }>
  operationSelected?: (op: Operation) => void
}

export const CFGraph: React.FC<ICFGraphProps> = (props: ICFGraphProps) => {
  const [activeBlocks, setActiveBlocks] = React.useState()
  React.useEffect(() => {
    clearGraph()
    setTimeout(() => {
      renderGraph()
    }, 200)
  }, [props.blocks])

  const svgElem = React.useRef<SVGSVGElement>(null)
  const innerElem = React.useRef<SVGSVGElement>(null)

  const opSelected = (op: Operation) => {
    if (props.operationSelected) {
      props.operationSelected(op)
      setActiveBlocks(props.blocks.find(b => b.operations.includes(op)))
    }
  }

  const isInTrace = (op: Operation) => {
    return props.trace && props.trace.find(t => t.pc === op.offset)
  }

  const renderBlock = (block: OperationBlock, graph: dagreD3.graphlib.Graph) => {
    graph.setNode(block.offset.toString(), {
      label: () => {
        const table = document.createElement('table')
        const tableE = d3.select(table)
        tableE.classed('graph__block-table', true)
        // tslint:disable-next-line:prefer-for-of
        for (let index = 0; index < block.operations.length; index++) {
          const op = block.operations[index]
          const tr = tableE.append('tr')
          tr.append('td').text('0x' + op.offset.toString(16).toUpperCase())
          // tr.append("td").text(op.opcode.opcode);
          tr.append('td').text(op.opcode.name.toUpperCase())
          tr.append('td').text(op.opcode.name.startsWith('PUSH') ? '0x' + op.argument.toString(16).toUpperCase() : '')

          if (isInTrace(op)) {
            tr.classed('acive-item', true)
          }

          tr.on('click', () => opSelected(op))
        }

        return table
      }
    })
  }

  const renderEdges = (block: OperationBlock, graph: dagreD3.graphlib.Graph) => {
    if (block.childA) {
      graph.setEdge(block.operations[0].offset.toString(), block.childA.toString(), { label: '' })
    }

    if (block.childB) {
      graph.setEdge(block.operations[0].offset.toString(), block.childB.toString(), { label: '' })
    }
  }

  const clearGraph = () => {
    const inner = d3.select(innerElem.current)
    inner.selectAll('*').remove()
  }

  const renderGraph = () => {
    const g = new dagreD3.graphlib.Graph().setGraph({
      rankdir: 'LR'
    })

    props.blocks.forEach(block => renderBlock(block, g))
    props.blocks.forEach(block => renderEdges(block, g))

    const svg: any = d3.select(svgElem.current)
    const inner = d3.select(innerElem.current)

    // Set up zoom support
    const zoom = d3.zoom().on('zoom', () => {
      inner.attr('transform', d3.event.transform)
    })

    svg.call(zoom)

    // Create the renderer
    const render = new dagreD3.render()

    // Run the renderer. This is what draws the final graph.
    render(inner as any, g)

    d3.selectAll('foreignObject > div').classed('node-wrapper', true)

    // // Center the graph
    // const initialScale = 1
    // svg.call(
    //   zoom.transform,
    //   d3.zoomIdentity.translate((svg.attr('width') - g.graph().width * initialScale) / 2, 20).scale(initialScale)
    // )
    // svg.attr('height', g.graph().height * initialScale + 40)
  }

  return (
    <StyledWrapper>
      <svg ref={svgElem} id="graph" width="100%" height="80vh">
        <g ref={innerElem} />
      </svg>
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  svg {
    border: 1.5px solid #999;
    overflow: hidden;
  }
  .node {
    white-space: nowrap;
  }

  .node .label-container {
    stroke: none;
  }

  .node .label table {
    border-collapse: collapse;
    margin: auto;
  }

  .node .label .node-wrapper {
    width: 100%;
    height: 100%;
    display: flex !important;
  }

  th,
  td {
    border: 1.6px solid orange;
    padding: 10px;
    text-align: left;
  }

  .acive-item {
    background: gray;
  }

  .node rect,
  .node circle,
  .node ellipse {
    stroke: #333;
    fill: #fff;
    stroke-width: 1.5px;
  }
  .cluster rect {
    stroke: #333;
    fill: #000;
    fill-opacity: 0.1;
    stroke-width: 1.5px;
  }
  .edgePath path.path {
    stroke: #333;
    stroke-width: 1.5px;
    fill: none;
  }
`
