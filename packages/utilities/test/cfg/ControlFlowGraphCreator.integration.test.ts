import axios from 'axios'
import { ControlFlowGraphCreator } from '../../src/cfg'
import fs from 'fs'

describe('ControlFlowGraphCreator tests', () => {
  let controlFlowGraphInstance: ControlFlowGraphCreator

  beforeEach(() => {
    controlFlowGraphInstance = new ControlFlowGraphCreator()
  })

  test.skip('control flow graph is created correctly [buildControlFlowGraphFromBytecode]', async () => {
    const simpleStorageBytecode = "6080604052348015600f57600080fd5b506004361060325760003560e01c80632096525514603757806355241077146053575b600080fd5b603d607e565b6040518082815260200191505060405180910390f35b607c60048036036020811015606757600080fd5b81019080803590602001909291905050506087565b005b60008054905090565b806000819055505056fea265627a7a7231582047dc294fbccf888f36f6849a1b9a8be2e8c91685092143facbb11ad68293bff264736f6c63430005100032"

    const { data } = await axios.post('http://localhost:9090/cfg/bytecode?constructor=false', {
      request: simpleStorageBytecode
    });
    console.log("DATA", JSON.stringify(data))
    const result = controlFlowGraphInstance.buildControlFlowGraphFromBytecode(simpleStorageBytecode)
    console.log("result", result)
    // console.log("Blocks", JSON.stringify(result.contractRuntime.blocks))

    expect(result).toBeTruthy()
    expect(result.contractRuntime.blocks).toBeDefined()
    expect(data).toBeDefined()

    fs.writeFileSync('blocks-old.json', JSON.stringify(data.blocks))
    fs.writeFileSync('blocks-new.json', JSON.stringify(result.contractRuntime.blocks))
    // expect(JSON.stringify(data.contractRuntime.blocks)).toEqual(JSON.stringify(result.contractRuntime.blocks))
    // expect(data.contractRuntime.bytecode).toEqual(result.contractRuntime.bytecode)
    // expect(data.contractRuntime.rawBytecode).toEqual(result.contractRuntime.rawBytecode)
  })
})


