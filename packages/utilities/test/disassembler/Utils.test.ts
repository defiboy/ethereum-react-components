import { hasMetadataPrefixV1, METADATA_PREFIX_V1, METADATA_PREFIX_V2, hasMetadataPrefixV2, removeMetadata, getCleanedBytecode } from "../../src"

describe('Disassembler utilities test', () => {

    describe('hasMetadataPrefixV1()', () => {

        test('that bytecode has metadata prefix1', () => {
            const bytecode = `80608040${METADATA_PREFIX_V1}`

            const result = hasMetadataPrefixV1(bytecode)

            expect(result).toBeTruthy()
        })

        test('that bytecode has NOT metadata prefix1', () => {
            const bytecode = "80608040"

            const result = hasMetadataPrefixV1(bytecode)

            expect(result).toBeFalsy()
        })
    })

    describe('hasMetadataPrefixV2()', () => {
        test('that bytecode has metadata prefix2', () => {
            const bytecode = `80608040${METADATA_PREFIX_V2}`

            const result = hasMetadataPrefixV2(bytecode)

            expect(result).toBeTruthy()
        })

        test('that bytecode has NOT metadata prefix2', () => {
            const bytecode = "80608040"

            const result = hasMetadataPrefixV2(bytecode)

            expect(result).toBeFalsy()
        })
    })

    describe('removeMetadata()', () => {

        test('that metadatav1 is removed correctly', () => {
            const expectedByteCode = '80608040'
            const bytecode = `${expectedByteCode}${METADATA_PREFIX_V1}`

            const result = removeMetadata(bytecode)

            expect(result).toEqual(expectedByteCode)
        })

        test('that metadatav2 is removed correctlyith ', () => {
            const expectedByteCode = '80608040'
            const bytecode = `${expectedByteCode}${METADATA_PREFIX_V2}`

            const result = removeMetadata(bytecode)

            expect(result).toEqual(expectedByteCode)
        })
    })

    describe('getCleanedBytecode()', () => {
        test('that bytecode is cleaned when bytecode has spaces', () => {
            const expectedByteCode = '608060405234801561001057600080fd5b506103e860008190555033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506101928061006a6000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063209652551461003b5780635524107714610059575b600080fd5b610043610087565b6040518082815260200191505060405180910390f35b6100856004803603602081101561006f57600080fd5b8101908080359060200190929190505050610090565b005b60008054905090565b3373ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610153576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f4f6e6c79206f776e65722063616e207365742076616c7565000000000000000081525060200191505060405180910390fd5b806000819055505056fea265627a7a72315820248935eef76f2e30e97cadcb0097f04f8b1493b1ad7a90ede90364e65470d1d164736f6c634300050e0032'
            const bytecode = `  ${expectedByteCode}  `

            const result = getCleanedBytecode(bytecode)

            expect(result).toEqual(expectedByteCode)
        })

        test('that bytecode is cleaned when bytecode has 0x', () => {
            const expectedByteCode = '80608040'
            const bytecode = `0x${expectedByteCode}`

            const result = getCleanedBytecode(bytecode)

            expect(result).toEqual(expectedByteCode)
        })

        test('that bytecode is cleaned when bytecode has 0x and spaces', () => {
            const expectedByteCode = '80608040'
            const bytecode = `    0x${expectedByteCode}    `

            const result = getCleanedBytecode(bytecode)

            expect(result).toEqual(expectedByteCode)
        })

        test('that bytecode is invalid after cleanup', () => {
            const expectedByteCode = '080608040'
            const bytecode = `${expectedByteCode}`

            try {
                const result = getCleanedBytecode(bytecode)
            } catch (error) {
                expect(error).toBeDefined()
                expect(error.message).toEqual(`Bad input, bytecode length not even: ${bytecode}, length: ${bytecode.length}`)
            }
        })

        test('that bytecode is cleaned when bytecode has 0x, spaces and metadatav1', () => {
            const expectedByteCode = '80608040'
            const bytecode = `    0x${expectedByteCode}${METADATA_PREFIX_V1}    `

            const result = getCleanedBytecode(bytecode)

            expect(result).toEqual(expectedByteCode)
        })

        test('that bytecode is cleaned when bytecode has 0x, spaces and metadatav1', () => {
            const expectedByteCode = '80608040'
            const bytecode = `    0x${expectedByteCode}${METADATA_PREFIX_V2}    `

            const result = getCleanedBytecode(bytecode)

            expect(result).toEqual(expectedByteCode)
        })
    })

})