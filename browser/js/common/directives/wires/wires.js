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
        $scope.$evalAsync();
    });

    console.log('This is the module content: ', $scope.module.content);

    $scope.wires = $scope.module.content;

    $scope.submit = function (wire) {

        // $scope.class = "wirebreak";
        wire.wasCut = true;

        if (wire.solution) {
            SuccessFactory.success($scope.currentStage, gameRef);
        } else {
            StrikeFactory.strike($scope.strikes, gameRef);
        }
        $scope.$evalAsync();
    };

    $scope.assignColor = function (wire) {
        return wire.color;
    };

    $scope.cutWire = function(wire) {
        if (wire.wasCut) {
            return 'wirebreak';
        }
    }

});
