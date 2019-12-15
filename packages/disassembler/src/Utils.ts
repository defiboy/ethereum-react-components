export const METADATA_PREFIX_V1 = "a165627a7a72305820";
export const METADATA_PREFIX_V2 = "a265627a7a72305820";

const METADATA_PREFIX_V1_REGEX = new RegExp(METADATA_PREFIX_V1, 'i')
const METADATA_PREFIX_V2_REGEX = new RegExp(METADATA_PREFIX_V2, 'i')

export const hasMetadataPrefixV1 = (bytecode: string) => METADATA_PREFIX_V1_REGEX.test(bytecode)

export const hasMetadataPrefixV2 = (bytecode: string) => METADATA_PREFIX_V2_REGEX.test(bytecode)

export const removeMetadata = (bytecode: string): string => {
    if (hasMetadataPrefixV1(bytecode)) {
        const indexOfMetadata = bytecode.indexOf(METADATA_PREFIX_V1)
        return bytecode.slice(0, indexOfMetadata)
    }

    if (hasMetadataPrefixV2(bytecode)) {
        const indexOfMetadata = bytecode.indexOf(METADATA_PREFIX_V2)
        return bytecode.slice(0, indexOfMetadata)
    }

    return bytecode
}

export const getCleanedBytecode = (bytecode: string): string => {
    let cleanedBytecode = bytecode.trim();

    if (cleanedBytecode.startsWith("0x")) {
        cleanedBytecode = cleanedBytecode.slice(2);
    }

    const code = removeMetadata(cleanedBytecode)

    if (code.length % 2 !== 0) {
        throw new Error(
            `Bad input, bytecode length not even: ${code}, length: ${code.length}`
        );
    }

    return code
}