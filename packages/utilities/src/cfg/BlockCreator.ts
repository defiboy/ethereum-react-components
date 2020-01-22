import { CFGBlocks, Operation, OperationBlock } from "@ethereum-react/types";

const BLOCK_END_OPCODES = ["JUMPI", "JUMP", "STOP", "REVERT", "RETURN", "INVALID"];

export const getCFGBlocksFromOperations = (operations: Operation[]): CFGBlocks => {
    const blocks: CFGBlocks = new CFGBlocks();
    let startIndex = 0;
    for (let i = 0; i < operations.length; i++) {
        const op: Operation = operations[i];
        if (BLOCK_END_OPCODES.includes(op.opcode.name) || isLastOperation(i, operations.length)) {
            addNewBlock(operations, startIndex, i, blocks);
            startIndex = i + 1;
        }
    }
    return blocks;
};

const isLastOperation = (currentIndex: number, operationsLength) => {
    return currentIndex === operationsLength - 1;
};

const addNewBlock = (ops: Operation[], startIndex: number, i: number, blocks: CFGBlocks) => {
    const newBlockOps = ops.slice(startIndex, i + 1);
    const firstBlockOp = newBlockOps[0];
    const newBlock: OperationBlock = {
        offset: firstBlockOp.offset,
        operations: newBlockOps
    };
    blocks.push(newBlock, firstBlockOp.offset);
};
