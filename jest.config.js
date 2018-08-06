module.exports = {
    testURL: 'http://localhost',
    transform: {
        '^.+\\.tsx?$': 'ts-jest'
    },
    testRegex: '\\.spec\\.tsx?$',
    moduleFileExtensions: [
        'ts',
        'tsx',
        'js',
        'jsx'
      ]
}
