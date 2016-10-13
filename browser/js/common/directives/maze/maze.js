app.config(function ($stateProvider) {

    $stateProvider.state('maze', {
        url: '/maze',
        template: '<maze></maze>',
    });

});

app.directive('maze', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/wires/wires.html',
        scope: {
            module: '='
        },
        controller: 'MazeCtrl'
    };

});

app.controller('MazeCtrl', function($scope, StrikeFactory, $http, $stateParams, $firebaseObject, $firebaseArray, SuccessFactory) {

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.on('value', function(snap) {
        $scope.currentGame = snap.val();
        $scope.strikes = $scope.currentGame.strikes;
        $scope.currentStage = snap.val().currentStage;
        $scope.$evalAsync();
    });

    console.log('This is the module content: ', $scope.module.content);

    $scope.wires = $scope.module.content;

    $scope.submit = function(wire) {
        if (wire.solution) {
            SuccessFactory.success($scope.currentStage, gameRef);
        } else {
            StrikeFactory.strike($scope.strikes, gameRef);
        }
        $scope.$evalAsync();
    };

    $scope.assignColor = function(wire) {
        return wire.color;
    };

});
