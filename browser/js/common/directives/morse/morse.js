app.config(function ($stateProvider) {

    $stateProvider.state('morse', {
        url: '/morse',
        template: '<morse></morse>',
    });

});

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

    // let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    // gameRef.on('value', function(snap) {
    //     $scope.currentGame = snap.val();
    //     $scope.strikes = $scope.currentGame.strikes;
    //     $scope.currentStage = snap.val().currentStage;
    //     $scope.$evalAsync();
    // });

    // var wordObj = $scope.module.content;
    // $scope.word = wordObj.word;
    // $scope.solutionFrequency = wordObj.frequency;

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
