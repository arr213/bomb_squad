app.factory('StrikeFactory', function() {

    const StrikeFactory = {};

    StrikeFactory.strike = function(strikeCount, game) {

        // console.log('Pre-angular copy', strikeCount);

        // console.log(strikeCount);
        // console.log(game);
        strikeCount = angular.copy(strikeCount);

        // console.log('Post Angular Copy', strikeCount);
        for (let i = 0; i < strikeCount.length; i++) {
            // console.log(strikeCount, strikeCount[0])
            if (!strikeCount[i].active) {
                //set that value in firebase to true
                strikeCount[i].active = true;
                // console.log(game);
                game.set({ strikes: strikeCount });
                break;
            }
        }

        if (strikeCount[strikeCount.length - 1].active) {
            console.log('GAME OVER');
            console.log('YOU EXPLODED!');
        }
    }

    return StrikeFactory;

});
