module.exports = {
    preset: 'ts-jest/presets/default',
    testEnvironment: 'node',
    roots: [
        "<rootDir>/src",
        "<rootDir>/test"
    ],
    globals: {
        'ts-jest': {
            diagnostics: true
        }
    },
    transformIgnorePatterns: ['^.+\\.js$'],
    reporters: ["default", "jest-junit"],
};
