const mazeOptions = require('./mazeOptions');
const _ = require('lodash');
const mazeGenerator = {};
module.exports = mazeGenerator;

mazeGenerator.generate = function() {
    let mazeSelection = _.cloneDeep(_.sample(mazeOptions.options));
    let finalMazeWithStart = mazeGenerator.setGoalAndStart(mazeSelection);
    return finalMazeWithStart;
}

mazeGenerator.setGoalAndStart = function(maze) {
    const setXYCoord = function() {
        let coord = [];
        coord.push(_.random(0, 5));
        coord.push(_.random(0, 5));
        return coord;
    }
    let startCoords = setXYCoord();
    let endCoords = setXYCoord();
    while (endCoords.toString() === startCoords.toString()) {
        endCoords = setXYCoord();
    }
    maze[endCoords[0]][endCoords[1]].goal = true;
    return { startX: startCoords[0], startY: startCoords[1], endX: endCoords[0], endY: endCoords[1], maze: maze };
};

//Returns an object with a 6x6 array maze and start coords as an array

console.log(mazeGenerator.generate());
