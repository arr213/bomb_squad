// symbolOptions.js

const _ = require('lodash');
const symbolOptions = {};
module.exports = symbolOptions;

symbolOptions.symbolList = [{
    id: 1,
    name: 'lollipop',
    unicode: null
}, {
    id: 2,
    name: 'A',
    unicode: null
}, {
    id: 3,
    name: 'lambda',
    unicode: null
}, {
    id: 4,
    name: 'zig-zag',
    unicode: null
}, {
    id: 5,
    name: 'kitty-cat',
    unicode: null
}, {
    id: 6,
    name: 'curly-H',
    unicode: null
}, {
    id: 7,
    name: 'backwards-C-dot',
    unicode: 'Ͽ'
}, {
    id: 8,
    name: 'backwards-E',
    unicode: null
}, {
    id: 9,
    name: 'lowercase-phi',
    unicode: null
}, {
    id: 10,
    name: 'outline-star',
    unicode: null
}, {
    id: 11,
    name: 'upside-down-question-mark',
    unicode: '¿'
}, {
    id: 12,
    name: 'copyright',
    unicode: null
}, {
    id: 13,
    name: 'cyclops',
    unicode: null
}, {
    id: 14,
    name: 'mirrored-K',
    unicode: null
}, {
    id: 15,
    name: 'right-half-R',
    unicode: 'Ꝛ'
}, {
    id: 16,
    name: 'lowercase-delta',
    unicode: null
}, {
    id: 17,
    name: 'pilcrow',
    unicode: '¶'
}, {
    id: 18,
    name: 'T-b',
    unicode: null
}, {
    id: 19,
    name: 'smiley',
    unicode: null
}, {
    id: 20,
    name: 'capital-psi',
    unicode: null
}, {
    id: 21,
    name: 'C-dot',
    unicode: 'Ͼ'
}, {
    id: 22,
    name: 'snake',
    unicode: null
}, {
    id: 23,
    name: 'filled-in-star',
    unicode: null
}, {
    id: 24,
    name: 'unequal',
    unicode: null
}, {
    id: 25,
    name: 'a-e',
    unicode: 'æ'
}, {
    id: 26,
    name: 'backwards-N',
    unicode: null
}, {
    id: 27,
    name: 'capital-omega',
    unicode: null
}];

symbolOptions.columns = [
    [
        symbolOptions.symbolList[0],
        symbolOptions.symbolList[1],
        symbolOptions.symbolList[2],
        symbolOptions.symbolList[3],
        symbolOptions.symbolList[4],
        symbolOptions.symbolList[5],
        symbolOptions.symbolList[6],
    ],
    [
        symbolOptions.symbolList[7],
        symbolOptions.symbolList[0],
        symbolOptions.symbolList[6],
        symbolOptions.symbolList[8],
        symbolOptions.symbolList[9],
        symbolOptions.symbolList[5],
        symbolOptions.symbolList[10],
    ],
    [
        symbolOptions.symbolList[11],
        symbolOptions.symbolList[12],
        symbolOptions.symbolList[8],
        symbolOptions.symbolList[13],
        symbolOptions.symbolList[14],
        symbolOptions.symbolList[2],
        symbolOptions.symbolList[9],
    ],
    [
        symbolOptions.symbolList[15],
        symbolOptions.symbolList[16],
        symbolOptions.symbolList[17],
        symbolOptions.symbolList[5],
        symbolOptions.symbolList[13],
        symbolOptions.symbolList[10],
        symbolOptions.symbolList[18],
    ],
    [
        symbolOptions.symbolList[19],
        symbolOptions.symbolList[18],
        symbolOptions.symbolList[17],
        symbolOptions.symbolList[20],
        symbolOptions.symbolList[16],
        symbolOptions.symbolList[21],
        symbolOptions.symbolList[22],
    ],
    [
        symbolOptions.symbolList[15],
        symbolOptions.symbolList[7],
        symbolOptions.symbolList[23],
        symbolOptions.symbolList[24],
        symbolOptions.symbolList[19],
        symbolOptions.symbolList[25],
        symbolOptions.symbolList[26],
    ]
]
