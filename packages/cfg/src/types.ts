import { Opcode } from "../../types/src/Opcode";

export interface CFGComponent {
    traces: []; // TODO
    bytecode: string;
}

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
