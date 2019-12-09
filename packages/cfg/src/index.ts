import { Opcode } from "./Opcode";

export interface CFGComponent {
  traces: []; // TODO
  bytecode: string;
}

// export const React.Component<CFGComponent> {
//  recibe traces y bytecode y regresa un React component
// }

// algorithm
// bytecode to blocks
// blocks to graph viz

export interface OperationResponse {
  offset: number;
  opcode: Opcode;
  argument: string;
  begin?: number;
  end?: number;
}

export interface GFCResponse {
  cfg: string;
  operations: OperationResponse[];
}
