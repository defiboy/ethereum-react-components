import { ControlFlowGraphCreator } from '../src'

describe('ControlFlowGraphCreator tests', () => {
  let controlFlowGraphInstance: ControlFlowGraphCreator

  beforeEach(() => {
    controlFlowGraphInstance = new ControlFlowGraphCreator()
  })

  test('control flow graph is created correctly [buildControlFlowGraphFromBytecode]', () => {
    const simpleStorageBytecode = "608060405234801561001057600080fd5b506103e860008190555060da806100286000396000f3fe6080604052348015600f57600080fd5b5060043610604f576000357c0100000000000000000000000000000000000000000000000000000000900480632096525514605457806355241077146070575b600080fd5b605a609b565b6040518082815260200191505060405180910390f35b609960048036036020811015608457600080fd5b810190808035906020019092919050505060a4565b005b60008054905090565b806000819055505056fea165627a7a723058209c7687721ed665e81d460ae7cfa9f215783aaa55a62ee755d01c2d22268895970029"

    const result = controlFlowGraphInstance.buildControlFlowGraphFromBytecode(simpleStorageBytecode)

    console.log("Blocks", JSON.stringify(result.contractRuntime.blocks))

    expect(result).toBeTruthy()
    expect(result.contractRuntime.blocks).toBeDefined()
  })
})


