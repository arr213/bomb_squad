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

    $scope.password = $scope.module.content;
    $scope.columnCombos = $scope.password.combinations;


    $scope.goUp = function(column) {
        if (column.currentIndex === column.letterOptions.length - 1) {
            column.currentIndex = 0;
        } else {
            column.currentIndex++;
        }
    }


    $scope.goDown = function(column) {
        if (column.currentIndex === 0) {
            column.currentIndex = column.letterOptions.length - 1;
        } else {
            column.currentIndex--;
        }
    }

    $scope.submit = function() {
        let guess = '';
        $scope.columnCombos.forEach(function(columnObj){
            guess += columnObj.letterOptions[columnObj.currentIndex]
        })
        if (guess === $scope.password.word) {
            SuccessFactory.success($scope.currentStage, gameRef);
        } else {
            StrikeFactory.strike($scope.strikes, gameRef);
        }
        $scope.$evalAsync();
    };

});
