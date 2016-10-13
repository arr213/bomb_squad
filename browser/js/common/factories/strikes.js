app.factory('StrikeFactory', function() {

    const StrikeFactory = {};

    StrikeFactory.strike = function(strikeCount, game) {

        let strikeCopy = angular.copy(strikeCount);

        for (let i = 0; i < strikeCount.length; i++) {
            if (!strikeCount[i].active) {
                //set that value in firebase to true
                strikeCount[i].active = true;
                strikeCopy[i].active = true;
                game.update({ strikes: strikeCopy });
                break;
            }
        }
    }

    return StrikeFactory;

});
