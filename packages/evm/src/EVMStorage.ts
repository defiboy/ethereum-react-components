import { Word } from './Word'
import { Symbols } from './Symbols'

export class EVMStorage {
  storage = {}
  length

  store(slot: Word, value: Word) {
    if (!slot || !value) {
      return
    }
    if (slot.isSymbolic) {
      this.storage[slot.symbol as Symbols] = value // TODO Fix
    } else {
      this.storage[slot.value] = value
    }
  }

  load(slot: Word): Word {
    if (!slot) {
      throw new Error("Invalid slot")
    }
    if (slot.isSymbolic) {
      return this.storage[slot.symbol as Symbols] // TODO FIX
    } else {
      return this.storage[slot.value]
    }
  }
}
