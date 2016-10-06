// symbolOptions.js

const _ = require('lodash');
const symbolOptions = {};
module.exports = symbolOptions;

symbolOptions.symbolList = [{
    id: 1,
    name: 'lollipop',
    unicode: 'Ϙ'
}, {
    id: 2,
    name: 'A',
    unicode: 'Ѧ'
}, {
    id: 3,
    name: 'lambda',
    unicode: 'ƛ'
}, {
    id: 4,
    name: 'zig-zag',
    unicode: 'ѭ'
}, {
    id: 5,
    name: 'kitty-cat',
    unicode: 'ѭ'
}, {
    id: 6,
    name: 'curly-H',
    unicode: 'ϗ'
}, {
    id: 7,
    name: 'backwards-C-dot',
    unicode: 'Ͽ'
}, {
    id: 8,
    name: 'backwards-E',
    unicode: 'Ӭ'
}, {
    id: 9,
    name: 'lowercase-phi',
    unicode: 'Ҩ'
}, {
    id: 10,
    name: 'outline-star',
    unicode: '☆'
}, {
    id: 11,
    name: 'upside-down-question-mark',
    unicode: '¿'
}, {
    id: 12,
    name: 'copyright',
    unicode: '©'
}, {
    id: 13,
    name: 'cyclops',
    unicode: 'Ѽ'
}, {
    id: 14,
    name: 'mirrored-K',
    unicode: 'Ж'
}, {
    id: 15,
    name: 'right-half-R',
    unicode: 'Ꝛ'
}, {
    id: 16,
    name: 'lowercase-delta',
    unicode: 'Ϭ'
}, {
    id: 17,
    name: 'pilcrow',
    unicode: '¶'
}, {
    id: 18,
    name: 'T-b',
    unicode: 'Ѣ'
}, {
    id: 19,
    name: 'smiley',
    unicode: '☺'
}, {
    id: 20,
    name: 'capital-psi',
    unicode: 'ψ'
}, {
    id: 21,
    name: 'C-dot',
    unicode: 'Ͼ'
}, {
    id: 22,
    name: 'snake',
    unicode: 'Ѯ'	
}, {
    id: 23,
    name: 'filled-in-star',
    unicode: '★'
}, {
    id: 24,
    name: 'unequal',
    unicode: '҂'
}, {
    id: 25,
    name: 'a-e',
    unicode: 'æ'
}, {
    id: 26,
    name: 'backwards-N',
    unicode: 'Ҋ'
}, {
    id: 27,
    name: 'capital-omega',
    unicode: 'Ω'
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
