app.factory('SuccessFactory', function(){

    const SuccessFactory = {}

    SuccessFactory.success = function(currentStage,game){
        currentStage++;
        console.log(currentStage);
        var curStage = angular.copy(currentStage);
        console.log(curStage);
        game.update({currentStage: curStage});
    }

    return SuccessFactory;

});