app.factory('StrikeFactory', function () {

    const StrikeFactory = {};

    StrikeFactory.strike = function (strikeCount, game) {

        console.log('Pre-angular copy', strikeCount);


        strikeCount = angular.copy(strikeCount);

        console.log('Post Angular Copy', strikeCount);

        if (strikeCount[2]['active']) {
            return;
        }
        for (var i = 0; i < strikeCount.length; i++) {
            console.log(strikeCount, strikeCount[0])
            if (!strikeCount[i]['active']) {
                //set that value in firebase to true
                strikeCount[i]['active'] = true;
                game.update({strikes: strikeCount});
                return i;
            }
        }
    }

    return StrikeFactory;

});