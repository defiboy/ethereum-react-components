import { Word } from "./Word";

export class EVMStack {
  public stack: Word[] = [];

  public push(word: Word) {
    this.stack.push(word);
  }

  public pop(): Word {
    if (this.stack.length == 0) {
      throw new Error("Invalid operation, no items to pop");
    }
    return this.stack.pop() as Word;
  }

  public peek(): Word {
    return this.stack[this.stack.length - 1];
  }

  public get(index: number): Word {
    return this.stack[this.stack.length - 1 - index];
  }

  public put(index: number, word: Word) {
    this.stack[this.stack.length - 1 - index] = word;
  }

  public length(): number {
    return this.stack.length;
  }
}
