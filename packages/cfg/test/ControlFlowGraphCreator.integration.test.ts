import axios from 'axios'
import { ControlFlowGraphCreator } from '../src'
import fs from 'fs'

describe('ControlFlowGraphCreator tests', () => {
  let controlFlowGraphInstance: ControlFlowGraphCreator

  beforeEach(() => {
    controlFlowGraphInstance = new ControlFlowGraphCreator()
  })

  test.skip('control flow graph is created correctly [buildControlFlowGraphFromBytecode]', async () => {
    const simpleStorageBytecode = "608060405234801561001057600080fd5b506103e860008190555060da806100286000396000f3fe6080604052348015600f57600080fd5b5060043610604f576000357c0100000000000000000000000000000000000000000000000000000000900480632096525514605457806355241077146070575b600080fd5b605a609b565b6040518082815260200191505060405180910390f35b609960048036036020811015608457600080fd5b810190808035906020019092919050505060a4565b005b60008054905090565b806000819055505056fea165627a7a723058209c7687721ed665e81d460ae7cfa9f215783aaa55a62ee755d01c2d22268895970029"

    const { data } = await axios.post('http://localhost:9090/cfg/bytecode?constructor=false', {
      request: simpleStorageBytecode
    });

    // console.log("DATA", data)

    const result = controlFlowGraphInstance.buildControlFlowGraphFromBytecode(simpleStorageBytecode)

    // console.log("result", result)

    // console.log("Blocks", JSON.stringify(result.contractRuntime.blocks))

    expect(result).toBeTruthy()
    expect(result.contractRuntime.blocks).toBeDefined()
    expect(data).toBeDefined()

    fs.writeFileSync('blocks-old.json', JSON.stringify(data.contractRuntime.blocks))
    fs.writeFileSync('blocks-new.json', JSON.stringify(result.contractRuntime.blocks))
    expect(JSON.stringify(data.contractRuntime.blocks)).toEqual(JSON.stringify(result.contractRuntime.blocks))
    // expect(data.contractRuntime.bytecode).toEqual(result.contractRuntime.bytecode)
    // expect(data.contractRuntime.rawBytecode).toEqual(result.contractRuntime.rawBytecode)
  })
})


