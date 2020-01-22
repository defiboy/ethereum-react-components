import { UintUtils } from "./UintUtils";
import { Word } from "./Word";

// tslint:disable-next-line
const BN = require("bn.js");

export class EVMMemory {
  public memory: Buffer;

  constructor(initialLength: number) {
    this.memory = new Buffer(initialLength);
  }

  public bufferLength(): number {
    return this.memory.byteLength;
  }

  public wordCount(): number {
    const length = this.bufferLength();
    let result = 0;
    let firstNonZero = false;
    for (let i = length - Word.WORD_LENGTH_IN_BYTES; i >= 0; i = i - Word.WORD_LENGTH_IN_BYTES) {
      const word = this.loadWord(i).value;
      if (word.eq(UintUtils.ZERO) && !firstNonZero) {
        continue;
      }
      firstNonZero = true;
      result += Word.WORD_LENGTH_IN_BYTES;
    }
    return result;
  }

  public writeWord(offset: number, word: Word) {
    while (offset + Word.WORD_LENGTH_IN_BYTES > this.memory.byteLength) {
      this.increaseBufferLength();
    }
    if (!word.isSymbolic) {
      const valueBuffer = word.value.toArrayLike(Buffer, "be", Word.WORD_LENGTH_IN_BYTES);
      this.memory.fill(valueBuffer, offset, offset + valueBuffer.length);
    }
    // TODO handle symbolic values
  }

  public writeByte(offset: number, word: Word) {
    while (offset + 1 > this.memory.length) {
      this.increaseBufferLength();
    }
    if (!word.isSymbolic) {
      const mask = new BN("ff", 16);
      const valueLastByte = word.value.and(mask);
      const valueBuffer = valueLastByte.toArrayLike(Buffer, "be", 1);
      this.memory.fill(valueBuffer, offset, offset + valueBuffer.length);
    }
    // TODO handle symbolic values
  }

  public loadWord(offset: number): Word {
    const bytes = this.memory.slice(offset, offset + Word.WORD_LENGTH_IN_BYTES);
    // TODO handle symbolic values
    return {
      value: new BN(bytes.toString("hex"), 16),
      isSymbolic: false
    };
  }

  public load(offset: number, length: number): Buffer {
    const bytes = this.memory.slice(offset, offset + length);
    // TODO handle symbolic values
    return bytes;
  }

  private increaseBufferLength() {
    this.memory = Buffer.concat([this.memory, Buffer.alloc(this.memory.length)]);
  }
}
