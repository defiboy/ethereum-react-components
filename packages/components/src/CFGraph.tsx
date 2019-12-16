import * as React from 'react'
import { OperationBlock } from '../../cfg/lib/OperationBlock'
import dagreD3 from 'dagre-d3'
// import dagreD3 from 'dagre-d3'
import * as d3 from "d3";
// import * as DagreD3 from 'react-dagre-d3'
// tslint:disable-next-line:no-var-requires
import * as d3Graphviz from 'd3-graphviz';
import styled from 'styled-components'


const a = d3Graphviz.graphviz

export interface ICFGraphProps {
  blocks: OperationBlock[]
}

export const CFGraph: React.FC<ICFGraphProps> = (props: ICFGraphProps) => {



  const click = () => {
    //  // Create a new directed graph
    // var g = new dagreD3.graphlib.Graph().setGraph({});

    // // States and transitions from RFC 793
    // var states = [ "CLOSED", "LISTEN", "SYN RCVD", "SYN SENT",
    //                "ESTAB", "FINWAIT-1", "CLOSE WAIT", "FINWAIT-2",
    //                "CLOSING", "LAST-ACK", "TIME WAIT" ];

    // // Automatically label each of the nodes
    // states.forEach(function(state) { g.setNode(state, { 

    //   label: function() {
    //     const table = document.createElement("table")
    //     const tableE = d3.select(table)
    //     for (let index = 0; index < 4; index++) {
    //       const tr = tableE.append("tr");
    //       tr.append("td").text(state);
    //       tr.append("td").text(state);
    //       tr.append("td").text("B");

    //       tr.on('click', () => alert(index))
    //     }

    //     return table;
    //   }
    // }); });

    // // // Set up the edges
    // // g.setEdge("CLOSED",     "LISTEN",     { label: "open" });
    // // g.setEdge("LISTEN",     "SYN RCVD",   { label: "rcv SYN" });
    // // g.setEdge("LISTEN",     "SYN SENT",   { label: "send" });
    // // g.setEdge("LISTEN",     "CLOSED",     { label: "close" });
    // // g.setEdge("SYN RCVD",   "FINWAIT-1",  { label: "close" });
    // // g.setEdge("SYN RCVD",   "ESTAB",      { label: "rcv ACK of SYN" });
    // // g.setEdge("SYN SENT",   "SYN RCVD",   { label: "rcv SYN" });
    // // g.setEdge("SYN SENT",   "ESTAB",      { label: "rcv SYN, ACK" });
    // // g.setEdge("SYN SENT",   "CLOSED",     { label: "close" });
    // // g.setEdge("ESTAB",      "FINWAIT-1",  { label: "close" });
    // // g.setEdge("ESTAB",      "CLOSE WAIT", { label: "rcv FIN" });
    // // g.setEdge("FINWAIT-1",  "FINWAIT-2",  { label: "rcv ACK of FIN" });
    // // g.setEdge("FINWAIT-1",  "CLOSING",    { label: "rcv FIN" });
    // // g.setEdge("CLOSE WAIT", "LAST-ACK",   { label: "close" });
    // // g.setEdge("FINWAIT-2",  "TIME WAIT",  { label: "rcv FIN" });
    // // g.setEdge("CLOSING",    "TIME WAIT",  { label: "rcv ACK of FIN" });
    // // g.setEdge("LAST-ACK",   "CLOSED",     { label: "rcv ACK of FIN" });
    // // g.setEdge("TIME WAIT",  "CLOSED",     { label: "timeout=2MSL" });

    // // Set some general styles
    // g.nodes().forEach(function(v) {
    //   var node = g.node(v);
    //   node.rx = node.ry = 5;
    // });

    // // Add some custom colors based on state
    // g.node('CLOSED').style = "fill: #f77";
    // g.node('ESTAB').style = "fill: #7f7";

    // var svg: any = d3.select("svg"),
    //     inner = svg.select("g");

    // // Set up zoom support
    // var zoom = d3.zoom().on("zoom", function() {
    //       inner.attr("transform", d3.event.transform);
    //     });
    // svg.call(zoom);

    // // Create the renderer
    // var render = new dagreD3.render();

    // // Run the renderer. This is what draws the final graph.
    // render(inner as any, g);

    // // Center the graph
    // var initialScale = 0.75;
    // svg.call(zoom.transform, d3.zoomIdentity.translate((svg.attr("width") - g.graph().width * initialScale) / 2, 20).scale(initialScale));

    // svg.attr('height', g.graph().height * initialScale + 40);

    const g = new dagreD3.graphlib.Graph().setGraph({});

    const renderBlock = (block: OperationBlock, graph: dagreD3.graphlib.Graph) => {
      graph.setNode(block.offset.toString(), { 
        // label: () => {
        //   const table = document.createElement("table")
        //   const tableE = d3.select(table)
        //   tableE.classed('graph__block-table', true)
        //   for (let index = 0; index < block.operations.length; index++) {
        //     const op = block.operations[index]
        //     const tr = tableE.append("tr");
        //     tr.append("td").text('0x' + op.offset.toString(16).toUpperCase());
        //     // tr.append("td").text(op.opcode.opcode);
        //     tr.append("td").text(op.opcode.name.toUpperCase());
        //     tr.append("td").text(op.opcode.name.startsWith('PUSH') ? op.argument.toString(16).toUpperCase() : '');
      
        //     tr.on('click', () => alert(index))
        //   }
      
        //   return table;
        // }
        label: () => {
          const table = document.createElement("table")
          const tableE = d3.select(table)
          tableE.classed('graph__block-table', true)
          for (let index = 0; index < block.operations.length; index++) {
            const op = block.operations[index]
            const tr = tableE.append("tr");
            tr.append("td").text('0x' + op.offset.toString(16).toUpperCase());
            // tr.append("td").text(op.opcode.opcode);
            tr.append("td").text(op.opcode.name.toUpperCase());
            tr.append("td").text(op.opcode.name.startsWith('PUSH') ? '0x' + op.argument.toString(16).toUpperCase() : '');
      
            tr.on('click', () => alert(JSON.stringify(op)))
          }
      
          return table;
        }
      });
    }
    
    props.blocks.forEach(block => renderBlock(block, g))
    
    props.blocks.forEach(block => {
      if (block.childA) {
        g.setEdge(block.operations[0].offset.toString(), block.childA.toString(), { label: "" });
      }
    
      if (block.childB) {
        g.setEdge(block.operations[0].offset.toString(), block.childB.toString(), { label: "" });
      }
    })
    
    const svg: any = d3.select("svg")
    const inner = svg.select("g")
    
    // Set up zoom support
    const zoom = d3.zoom().on("zoom", () => {
      inner.attr("transform", d3.event.transform);
    })
    svg.call(zoom)
    
    // Create the renderer
    const render = new dagreD3.render();
    
    // Run the renderer. This is what draws the final graph.
    render(inner as any, g);
    
    d3.selectAll("foreignObject > div").classed("node-wrapper", true);

    // Center the graph
    const initialScale = 1;
    svg.call(zoom.transform, d3.zoomIdentity.translate((svg.attr("width") - g.graph().width * initialScale) / 2, 20).scale(initialScale));
    
    svg.attr('height', g.graph().height * initialScale + 40);
  }

  return (<StyledWrapper><svg id="graph" width="600" height="600"><g></g></svg><div onClick={() => click()}>aaaa</div> </StyledWrapper>)
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
  display: flex!important;
}

th, td {
    border: 1.6px solid orange;
    padding: 10px;
    text-align: left;
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
