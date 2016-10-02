const wireGen = {};

wireGen.wires = ['white','blue','yellow','black','red'];


//Returns a random number with min being inclusive, max being exclusive.
wireGen.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

wireGen.generateWireSeq = function(){
    
    //Generates a number 3-6, Indicating number of wires for the given module.
    const numWires = wireGen.getRandomInt(3,7);
    
    //Generates an array of colors indicating the order of wires by colors
    function wireColorGen(num){
        let wireColors = [];
        for(let i = 0; i < num; i++){
            //There are 5 possible wire colors; generates a wire sequence;
            const wireIndex = wireGen.getRandomInt(0,5);
            wireColors.push(wireGen.wires[wireIndex]);
        }
        return wireColors;
    }

    return wireColorGen(numWires);

};

module.exports = wireGen;