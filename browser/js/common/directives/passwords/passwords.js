app.directive('passwords', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/passwords/passwords.html',
        scope: {
            module: '='
        },
        controller: 'PasswordsCtrl'
    };

});

app.controller('PasswordsCtrl', function($scope, StrikeFactory, $http, $stateParams, $firebaseObject, $firebaseArray, SuccessFactory) {

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.on('value', function(snap) {
        $scope.currentGame = snap.val();
        $scope.strikes = $scope.currentGame.strikes;
        $scope.currentStage = snap.val().currentStage;
        $scope.$evalAsync();
    });

    var passwordObj = $scope.module.content;
    $scope.password = passwordObj.word;

    $scope.frequency = 500;

    $scope.increaseFrequency = function() {
        $scope.frequency++;
    };

    $scope.decreaseFrequency = function() {
        $scope.frequency--;
    };

    $scope.submit = function() {
        if ('3.' + $scope.frequency === $scope.solutionFrequency) {
            SuccessFactory.success($scope.currentStage, gameRef);
        } else {
            StrikeFactory.strike($scope.strikes, gameRef);
        }
        $scope.$evalAsync();
    };

});

