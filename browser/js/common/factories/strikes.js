app.factory('StrikeFactory', function() {

    const StrikeFactory = {};

    StrikeFactory.strike = function(strikeCount, game) {

        // console.log('Pre-angular copy', strikeCount);

        console.log(strikeCount);
        // console.log(game);
        let strikeCopy = angular.copy(strikeCount);

        // console.log('Post Angular Copy', strikeCount);
        for (let i = 0; i < strikeCount.length; i++) {
            // console.log(strikeCount, strikeCount[0])
            console.log(strikeCount[i].active);
            if (!strikeCount[i].active) {
                //set that value in firebase to true
                strikeCount[i].active = true;
                strikeCopy[i].active = true;
                // console.log(game);
                game.update({ strikes: strikeCopy });
                break;
            }
        }
        
        console.log(strikeCount);

       
    }

    return StrikeFactory;

});
