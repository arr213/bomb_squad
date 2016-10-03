const _ = require('lodash');

const wireGen = {};

//5 available colors
wireGen.wires = ['white', 'blue', 'yellow', 'black', 'red'];
//

//defining rules of what wires to cut
wireGen.ruleSet = {};

wireGen.ruleSet.threeWires = function (arr) {
    if (arr.indexOf('red') === -1) return 1;
    if (arr[2] === 'white') return 2;
    if (arr.filter(x => x === "blue").length > 1) return arr.lastIndexOf('blue');
    return 2;
};

wireGen.ruleSet.fourWires = function (arr, serialNo) {
    if((arr.filter(x => x === "red").length > 1) && (serialNo[serialNo.length-1]%2!==0)) return arr.lastIndexOf('red');
    if(arr[3]==='yellow' && arr.indexOf('red') === -1) return 0;
    if(arr.filter(x => x === "blue").length === 1) return 0;
    if(arr.filter(x => x === "yellow").length > 1) return 3;
    return 1;
};

wireGen.ruleSet.fiveWires = function (arr, serialNo) {
    if(arr[4] === 'black' && serialNo[serialNo.length-1]%2!==0) return 3;
    if(arr.filter(x => x === "red").length === 1 && arr.filter(x => x === "yellow").length > 1) return 0;
    if(arr.indexOf('black') === -1) return 1;
    return 0;
};

wireGen.ruleSet.sixWires = function (arr, serialNo) {
    if(arr.indexOf('yellow') === -1 && serialNo[serialNo.length-1]%2!==0) return 2;
    if(arr.filter(x => x === "yellow").length === 1 && arr.filter(x => x === "white").length > 1) return 3;
    if(arr.indexOf('red') === -1) return 5;
    return 3;
};
//

//Returns a random number with min being inclusive, max being exclusive.
wireGen.getRandomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

//Serial number can range from 000000 999999;
wireGen.serialNumGen = function() {
    let serial = String(wireGen.getRandomInt(0,10000));
    while(serial.length<6){
        serial = '0' + serial;
    }
    return serial;
}

wireGen.generateWireSeq = function (a, b) {

    //Error handling. a cannot be greater than b, a cannot be greater than b without a value for b
    if (a > b || (!b && a > 6) || a <= 0 || b <= 0) {
        throw new Error();
    }

    //defaults to 3 to 6 wires per module
    const minNum = a || 3;
    const maxNum = b || 6;

    //Generates a number 3-6, Indicating number of wires for the given module.
    const numWires = wireGen.getRandomInt(minNum, maxNum + 1);

    //Generates an array of colors indicating the order of wires by colors
    function wireColorGen(num) {
        let wireColors = [];
        for (let i = 0; i < num; i++) {
            //There are 5 possible wire colors; generates a wire sequence;
            const wireIndex = wireGen.getRandomInt(0, 5);
            wireColors.push(wireGen.wires[wireIndex]);
        }
        return wireColors;
    }

    return wireColorGen(numWires);

};

wireGen.generateAnswer = function (arr, serialNo) {
    console.log(arr);
    console.log(serialNo);
    if(arr.length === 3) return wireGen.ruleSet.threeWires(arr);
    if(arr.length === 4) return wireGen.ruleSet.fourWires(arr, serialNo);
    if(arr.length === 5) return wireGen.ruleSet.fiveWires(arr, serialNo);
    if(arr.length === 6) return wireGen.ruleSet.sixWires(arr, serialNo);
};

module.exports = wireGen;