import { Symbols } from "./Symbols";
import { Word } from "./Word";

export class EVMStorage {
  public storage = {};
  public length;

  public store(slot: Word, value: Word) {
    if (!slot || !value) {
      return;
    }
    if (slot.isSymbolic) {
      this.storage[slot.symbol as Symbols] = value; // TODO Fix
    } else {
      this.storage[slot.value] = value;
    }
  }

  public load(slot: Word): Word {
    if (!slot) {
      throw new Error("Invalid slot");
    }
    if (slot.isSymbolic) {
      return this.storage[slot.symbol as Symbols]; // TODO FIX
    } else {
      return this.storage[slot.value];
    }
  }
}
