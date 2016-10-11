app.directive('wires', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/wires/wires.html',
        scope: {
            module: '='
        },
        controller: 'WiresCtrl'
    };

});

app.controller('WiresCtrl', function ($scope, StrikeFactory, $http, $stateParams, $firebaseObject, $firebaseArray, SuccessFactory, $mdToast) {

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.on('value', function (snap) {
        $scope.currentGame = snap.val();
        $scope.strikes = $scope.currentGame.strikes;
        $scope.currentStage = snap.val().currentStage;
        console.log("This is the current stage ", $scope.currentStage);
        $scope.$evalAsync();
    });

    console.log("This is the module content: ", $scope.module.content);

    $scope.wires = $scope.module.content;

    $scope.submit = function (wire) {
        if (wire.solution) {
            console.log('YOU WIN!!');
            SuccessFactory.success($scope.currentStage, gameRef);
        } else {
            console.log('this is a strike in wires & means its working', $scope.strikes);
            StrikeFactory.strike($scope.strikes, gameRef);
        }
        $scope.$evalAsync();
    };

    $scope.assignColor = function (wire) {
        return wire.color;
    };

});