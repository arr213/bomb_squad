app.directive('wires', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/wires/wires.html',
        scope: {
            module: '='
        },
        controller: 'WiresCtrl'
    };

});

app.controller('WiresCtrl', function($scope, StrikeFactory, $http, $stateParams, $firebaseObject, $firebaseArray, SuccessFactory) {

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.once('value', function(snap) {
        $scope.currentGame = snap.val();
        $scope.strikes = $scope.currentGame.strikes;
        $scope.$evalAsync();
    });

    console.log('THE CURRENT GAME IS IS: ', $scope.currentGame);
    $scope.wires = $scope.module.content;
    $scope.strikes = $scope.currentGame.strikes;

    $scope.submit = function(wire) {
        console.log($scope.currentGame.currentStage);
        if (wire.solution === true) {
            console.log('YOU WIN!!');
            SuccessFactory.success($scope.currentGame.currentStage, gameRef);
        } else {
            console.log('this is a strike in wires & means its working', $scope.strikes);
            StrikeFactory.strike($scope.strikes, gameRef);
        }
    };

    $scope.assignColor = function(wire) {
        return wire.color;
    };

});
