// app.directive('passwords', function() {

//     return {
//         restrict: 'E',
//         templateUrl: 'js/common/directives/passwords/passwords.html',
//         scope: {
//             module: '='
//         },
//         controller: 'PasswordsCtrl'
//     };

// });

app.config(function ($stateProvider) {
    $stateProvider.state('passwords', {
        url: '/passwords',
        templateUrl: 'js/common/directives/passwords/passwords.html',
        controller: 'PasswordsCtrl',
    });
});

app.controller('PasswordsCtrl', function($scope, StrikeFactory, $http, $stateParams, $firebaseObject, $firebaseArray, SuccessFactory) {

    // let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    // gameRef.on('value', function(snap) {
    //     $scope.currentGame = snap.val();
    //     $scope.strikes = $scope.currentGame.strikes;
    //     $scope.currentStage = snap.val().currentStage;
    //     $scope.$evalAsync();
    // });

    // var passwordObj = $scope.module.content;
    // $scope.password = passwordObj.word;
    // $scope.combinationArrays = passwordObj.shuffledPassword;

    $scope.password = 'about';
    $scope.combinationArrays = [
    ['a', 'e', 'c', 'y', 'm'],
    ['b', 'l', 'z', 'k', 'f'],
    ['o', 'p', 't', 'i', 'r'],
    ['u', 'g', 'q', 's', 'c'],
    ['t', 'g', 'i', 'o', 'p']
    ];


    $scope.firstColumn = $scope.combinationArrays[0];
    $scope.secondColumn = $scope.combinationArrays[1];
    $scope.thirdColumn = $scope.combinationArrays[2];
    $scope.fourthColumn = $scope.combinationArrays[3];
    $scope.fifthColumn = $scope.combinationArrays[4];

    console.log('passwordObj: ', passwordObj);

    $scope.submit = function() {
        if ('3.' + $scope.frequency === $scope.solutionFrequency) {
            SuccessFactory.success($scope.currentStage, gameRef);
        } else {
            StrikeFactory.strike($scope.strikes, gameRef);
        }
        $scope.$evalAsync();
    };

});

