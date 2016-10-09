app.factory('SuccessFactory', function(){

    const SuccessFactory = {}

    SuccessFactory.success = function(currentStage,game){
        currentStage++;
        var curStage = angular.copy(currentStage);
        game.update({currentStage: curStage});
    }

    return SuccessFactory;

});