app.factory('SuccessFactory', function(){

    const SuccessFactory = {}

    SuccessFactory.success = function(currentStage,game){
        currentStage++;
        var curStage = angular.copy(currentStage);
        console.log(curStage);
        game.update({currentStage: curStage});
    };

    return SuccessFactory;

});