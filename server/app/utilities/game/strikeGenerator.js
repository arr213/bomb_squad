const _ = require('lodash');
const strikeGenerator = {};
module.exports = strikeGenerator;

strikeGenerator.generate = function(game) {
	if (game.strikeLimit > 3) game.strikeLimit = 3;
    const strikes = _.times(game.strikeLimit, function() {
        return { active: false };
    })
    return strikes;
}
