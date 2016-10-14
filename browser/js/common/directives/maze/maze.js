app.config(function($stateProvider) {

    $stateProvider.state('maze', {
        url: '/maze',
        controller: 'MazeCtrl',
        templateUrl: 'js/common/directives/maze/maze.html',
    });

});

// app.directive('maze', function() {

//     return {
//         restrict: 'E',
//         templateUrl: 'js/common/directives/maze/maze.html',
//         controller: 'MazeCtrl'
//     };

// });

app.controller('MazeCtrl', function($scope) {

    $scope.maze = [
        [{
            up: 'edge',
            down: 'valid',
            left: 'edge',
            right: 'valid',
            coordX: 0,
            coordY: 0,
            goal: false,
            anchor: false
        }, {
            up: 'edge',
            down: 'wall',
            left: 'valid',
            right: 'valid',
            coordX: 1,
            coordY: 0,
            goal: false,
            anchor: false
        }, {
            up: 'edge',
            down: 'valid',
            left: 'valid',
            right: 'wall',
            coordX: 2,
            coordY: 0,
            goal: false,
            anchor: false
        }, {
            up: 'edge',
            down: 'valid',
            left: 'wall',
            right: 'valid',
            coordX: 3,
            coordY: 0,
            goal: false,
            anchor: false
        }, {
            up: 'edge',
            down: 'valid',
            left: 'valid',
            right: 'valid',
            coordX: 4,
            coordY: 0,
            goal: false,
            anchor: false
        }, {
            up: 'edge',
            down: 'valid',
            left: 'valid',
            right: 'edge',
            coordX: 5,
            coordY: 0,
            goal: false,
            anchor: false
        }],
        [{
            up: 'valid',
            down: 'valid',
            left: 'edge',
            right: 'wall',
            coordX: 0,
            coordY: 1,
            goal: false,
            anchor: true
        }, {
            up: 'valid',
            down: 'valid',
            left: 'wall',
            right: 'valid',
            coordX: 1,
            coordY: 1,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'wall',
            left: 'valid',
            right: 'wall',
            coordX: 2,
            coordY: 1,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'wall',
            left: 'wall',
            right: 'valid',
            coordX: 3,
            coordY: 1,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'wall',
            left: 'valid',
            right: 'valid',
            coordX: 4,
            coordY: 1,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'valid',
            left: 'valid',
            right: 'edge',
            coordX: 5,
            coordY: 1,
            goal: false,
            anchor: false
        }],
        [{
            up: 'valid',
            down: 'valid',
            left: 'edge',
            right: 'wall',
            coordX: 0,
            coordY: 2,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'wall',
            left: 'wall',
            right: 'valid',
            coordX: 1,
            coordY: 2,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'valid',
            left: 'valid',
            right: 'wall',
            coordX: 2,
            coordY: 2,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'valid',
            left: 'wall',
            right: 'valid',
            coordX: 3,
            coordY: 2,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'wall',
            left: 'valid',
            right: 'valid',
            coordX: 4,
            coordY: 2,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'valid',
            left: 'valid',
            right: 'edge',
            coordX: 5,
            coordY: 2,
            goal: false,
            anchor: true
        }],
        [{
            up: 'valid',
            down: 'valid',
            left: 'edge',
            right: 'wall',
            coordX: 0,
            coordY: 3,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'wall',
            left: 'wall',
            right: 'valid',
            coordX: 1,
            coordY: 3,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'wall',
            left: 'valid',
            right: 'valid',
            coordX: 2,
            coordY: 3,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'wall',
            left: 'valid',
            right: 'wall',
            coordX: 3,
            coordY: 3,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'wall',
            left: 'wall',
            right: 'valid',
            coordX: 4,
            coordY: 3,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'valid',
            left: 'valid',
            right: 'edge',
            coordX: 5,
            coordY: 3,
            goal: false,
            anchor: false
        }],
        [{
            up: 'valid',
            down: 'valid',
            left: 'edge',
            right: 'valid',
            coordX: 0,
            coordY: 4,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'wall',
            left: 'valid',
            right: 'valid',
            coordX: 1,
            coordY: 4,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'valid',
            left: 'valid',
            right: 'valid',
            coordX: 2,
            coordY: 4,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'valid',
            left: 'valid',
            right: 'valid',
            coordX: 3,
            coordY: 4,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'wall',
            left: 'valid',
            right: 'wall',
            coordX: 4,
            coordY: 4,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'valid',
            left: 'wall',
            right: 'edge',
            coordX: 5,
            coordY: 4,
            goal: false,
            anchor: false
        }],
        [{
            up: 'valid',
            down: 'edge',
            left: 'edge',
            right: 'valid',
            coordX: 0,
            coordY: 5,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'edge',
            left: 'valid',
            right: 'wall',
            coordX: 1,
            coordY: 5,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'edge',
            left: 'wall',
            right: 'valid',
            coordX: 2,
            coordY: 5,
            goal: false,
            anchor: false
        }, {
            up: 'valid',
            down: 'edge',
            left: 'valid',
            right: 'wall',
            coordX: 3,
            coordY: 5,
            goal: false,
            anchor: false
        }, {
            up: 'wall',
            down: 'edge',
            left: 'wall',
            right: 'valid',
            coordX: 4,
            coordY: 5,
            goal: true,
            anchor: false
        }, {
            up: 'valid',
            down: 'edge',
            left: 'valid',
            right: 'edge',
            coordX: 5,
            coordY: 5,
            goal: false,
            anchor: false
        }]
    ]


    // let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    // gameRef.on('value', function(snap) {
    //     $scope.currentGame = snap.val();
    //     $scope.strikes = $scope.currentGame.strikes;
    //     $scope.currentStage = snap.val().currentStage;
    //     $scope.$evalAsync();
    // });

    // console.log('This is the module content: ', $scope.module.content);
    $scope.currX = 3;
    $scope.currY = 2;

    $scope.upX = function() {
        if ($scope.currX < 5) $scope.currX++;
    }
    $scope.upY = function() {
        if ($scope.currY < 5) $scope.currY++;
    }
    $scope.downX = function() {
        if ($scope.currX > 1) $scope.currX--;
    }
    $scope.downY = function() {
        if ($scope.currY > 1) $scope.currY--;
    }

    // $scope.submit = function(wire) {
    //     if (wire.solution) {
    //         SuccessFactory.success($scope.currentStage, gameRef);
    //     } else {
    //         StrikeFactory.strike($scope.strikes, gameRef);
    //     }
    //     $scope.$evalAsync();
    // };

});
