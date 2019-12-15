import { EVMMemory } from "./EVMMemory";
import { EVMStack } from "./EVMStack";
import { EVMStorage } from "./EVMStorage";
import { Word } from "./Word";

export class EVM {
  public stack: EVMStack;
  public storage: EVMStorage;
  public memory: EVMMemory;
  public nextJumpLocation?: Word;

  constructor() {
    this.stack = new EVMStack();
    this.storage = new EVMStorage();
    this.memory = new EVMMemory(64);
  }
}
