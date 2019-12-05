module.exports = {
    preset: 'ts-jest/presets/js-with-ts',
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
    reporters: ["default", "jest-junit"],
};
