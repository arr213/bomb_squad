app.directive('maze', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/maze/maze.html',
        controller: 'MazeCtrl',
        scope: {
            module: '='
        }
    };

});

app.controller('MazeCtrl', function($scope, StrikeFactory, SuccessFactory, $stateParams) {

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.on('value', function(snap) {
        $scope.currentGame = snap.val();
        $scope.strikes = $scope.currentGame.strikes;
        $scope.currentStage = snap.val().currentStage;
        $scope.$evalAsync();
    });

    console.log('This is the module content: ', $scope.module.content);
    $scope.maze = $scope.module.content.maze;
    $scope.currX = $scope.module.content.startX;
    $scope.currY = $scope.module.content.startY;

    $scope.moveRight = function() {
        let moveStatus = $scope.maze[$scope.currY][$scope.currX].right;
        if (moveStatus === 'wall') {
            StrikeFactory.strike($scope.strikes, gameRef);
            $scope.$evalAsync();
        }
        if ($scope.currX < 5 && moveStatus === 'valid') $scope.currX++;
        if ($scope.maze[$scope.currY][$scope.currX].goal === true) {
            SuccessFactory.success($scope.currentStage, gameRef);
            $scope.$evalAsync();
        }
    }

    $scope.moveLeft = function() {
        let moveStatus = $scope.maze[$scope.currY][$scope.currX].left;
        if (moveStatus === 'wall') {
            StrikeFactory.strike($scope.strikes, gameRef);
            $scope.$evalAsync();
        }
        if ($scope.currX > 0 && moveStatus === 'valid') $scope.currX--;
        if ($scope.maze[$scope.currY][$scope.currX].goal === true) {
            SuccessFactory.success($scope.currentStage, gameRef);
            $scope.$evalAsync();
        }
    }

    $scope.moveUp = function() {
        let moveStatus = $scope.maze[$scope.currY][$scope.currX].up;
        if (moveStatus === 'wall') {
            StrikeFactory.strike($scope.strikes, gameRef);
            $scope.$evalAsync();
        }
        if ($scope.currY > 0 && moveStatus === 'valid') $scope.currY--;
        if ($scope.maze[$scope.currY][$scope.currX].goal === true) {
            SuccessFactory.success($scope.currentStage, gameRef);
            $scope.$evalAsync();
        }
    }

    $scope.moveDown = function() {
        let moveStatus = $scope.maze[$scope.currY][$scope.currX].down;
        if (moveStatus === 'wall') {
            StrikeFactory.strike($scope.strikes, gameRef);
            $scope.$evalAsync();
        }
        if ($scope.currY < 5 && moveStatus === 'valid') $scope.currY++;
        if ($scope.maze[$scope.currY][$scope.currX].goal === true) {
            SuccessFactory.success($scope.currentStage, gameRef);
            $scope.$evalAsync();
        }
    }

});
