app.factory('SuccessFactory', function(){

    const SuccessFactory = {}

    SuccessFactory.success = function(currentStage,game){
        var curStage = angular.copy(currentStage);
        console.log(curStage);
        curStage++;
        game.update({currentStage: curStage});
    }

    return SuccessFactory;

});