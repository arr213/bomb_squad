app.factory('StrikeFactory', function () {

    const StrikeFactory = {};

    StrikeFactory.strike = function (strikes, game) {
        console.log(game);
        if (strikes[2]['active']) {
            return;
        }
        for (var i = 0; i < strikes.length; i++) {
            if (!strikes[i]['active']) {
                //set that value in firebase to true
                strikes[i]['active'] = true;
                game.update({wat:'wat'});
                return i;
            }
        }
    }

    return StrikeFactory;

});