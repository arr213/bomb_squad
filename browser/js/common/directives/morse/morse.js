app.directive('morse', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/morse/morse.html',
        scope: {
            module: '='
        },
        controller: 'MorseCtrl'
    };

});

app.controller('MorseCtrl', function($scope, StrikeFactory, $http, $stateParams, $firebaseObject, $firebaseArray, SuccessFactory) {

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.on('value', function(snap) {
        $scope.currentGame = snap.val();
        $scope.strikes = $scope.currentGame.strikes;
        $scope.currentStage = snap.val().currentStage;
        $scope.$evalAsync();
    });

    var wordObj = $scope.module.content;
    $scope.word = wordObj.word;
    $scope.solutionFrequency = wordObj.frequency;
    $scope.frequencyOptions = [505, 515, 522, 532, 535, 542, 545, 552, 555, 565, 572, 575, 582, 592, 595, 600];

    $scope.frequencyIndex = 0;

    $scope.increaseFrequency = function() {
        if ($scope.frequencyIndex === $scope.frequencyOptions.length - 1) $scope.frequencyIndex = 0;
        else $scope.frequencyIndex++;
    };

    $scope.decreaseFrequency = function() {
        if ($scope.frequencyIndex === 0) $scope.frequencyIndex = $scope.frequencyOptions.length - 1;
        else $scope.frequencyIndex--;
    };

    $scope.submit = function() {
        if ('3.' + $scope.frequencyOptions[$scope.frequencyIndex] === $scope.solutionFrequency) {
            SuccessFactory.success($scope.currentStage, gameRef);
        } else {
            StrikeFactory.strike($scope.strikes, gameRef);
        }
        $scope.$evalAsync();
    };

});
