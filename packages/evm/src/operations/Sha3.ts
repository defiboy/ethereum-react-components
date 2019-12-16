import { Operation } from "@ethereum-react-components/types";
import { EVM } from "../EVM";
import { Symbols } from "../Symbols";
import { Word } from "../Word";
import { Executor } from "./Executor";

// tslint:disable-next-line
const BN = require("bn.js");
// tslint:disable-next-line
const utils = require("ethereumjs-util");

export class Sha3 implements Executor {
  public execute(op: Operation, evm: EVM) {
    const operand1 = evm.stack.pop();
    const operand2 = evm.stack.pop();
    if (!operand1 || !operand2) {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
      return;
    }
    if (!operand1.isSymbolic && !operand2.isSymbolic) {
      const offset = operand1.value;
      const length = operand2.value;
      if (offset.bitLength() > 53 || length.bitLength() > 53) {
        evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
        return;
      }
      const memoryContent = evm.memory.load(offset.toNumber(), length.toNumber());
      const result = new BN(utils.keccak256(memoryContent));
      evm.stack.push(Word.createLiteral(result.toString(16)));
    } else {
      evm.stack.push(Word.createSymbolic(Symbols.UNKNOWN));
    }
  }
}
