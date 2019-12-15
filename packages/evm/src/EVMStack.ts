import { Word } from './Word'

export class EVMStack {
  stack: Word[] = []

  push(word: Word) {
    this.stack.push(word)
  }

  pop(): Word {
    if (this.stack.length == 0) {
      throw new Error('Invalid operation, no items to pop')
    }
    return this.stack.pop() as Word
  }

  peek(): Word {
    return this.stack[this.stack.length - 1]
  }

  get(index: number): Word {
    return this.stack[this.stack.length - 1 - index]
  }

  put(index: number, word: Word) {
    this.stack[this.stack.length - 1 - index] = word
  }

  length(): number {
    return this.stack.length
  }
}
