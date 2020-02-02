import { OperationBlock } from "./OperationBlock";

interface CFGBlock {
  [key: number]: OperationBlock;
}

export class CFGBlocks {
  public blocks: CFGBlock = {}; // offset : OperationBlock

  public push(block: OperationBlock, offset: number) {
    this.blocks[offset] = block;
  }

  public get(offset: number): OperationBlock {
    const block: OperationBlock = this.blocks[offset];
    if (!block) {
      for (const key of Object.keys(this.blocks)) {
        const b: OperationBlock = this.blocks[key];
        const found = b.operations.find(op => op.offset === offset);
        if (found) {
          return b;
        }
      }
    }
    return block;
  }

  public keys(): number[] {
    return Object.keys(this.blocks).map(e => parseFloat(e));
  }

  public values(): OperationBlock[][] {
    return Object.values(this.blocks);
  }

  public length(): number {
    return this.keys().length;
  }
}
