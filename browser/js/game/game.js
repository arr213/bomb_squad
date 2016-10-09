app.config(function ($stateProvider) {

    $stateProvider.state('game', {
        url: '/game/:gameKey/:squad',
        templateUrl: '/js/game/game.html',
        controller: 'GameCtrl'
    });

});

app.controller('GameCtrl', function ($scope, $stateParams, $state) {

    $scope.squadName = $stateParams.squad;

    let interval;
    $scope.currentStage = 0;
    var rootRef = firebase.database().ref('/game');
    $scope.currentGame = rootRef.child($stateParams.gameKey);

    $scope.currentGame.child('stages').once('value', function (snap) {
        $scope.stages = snap.val();
        $scope.currentModule = $scope.stages[$scope.currentStage].modules[0];
        $scope.$evalAsync();
    });

    $scope.currentGame.child('currentStage').on('value', function (snap) {
        $scope.currentStage = snap.val();
        if($scope.currentStage === $scope.stages.length){
            $scope.currentGame = null;
            clearInterval(interval);
            $state.go('victory');
        }
    });
    
    $scope.currentGame.child('strikes').on('value', function (snapshot) {
        $scope.strikes = snapshot.val();
        if ($scope.strikes[2]['active']) {
            $scope.currentGame = null;
            clearInterval(interval);
            $state.go('gameover');
        }
        $scope.$evalAsync();
    });

    $scope.gamePlaying = null;

    $scope.currentGame.child('gameStarted').on('value', function (snap) {
        if (snap.val()) {
            if (!$scope.gamePlaying) {
                $scope.gamePlaying = true;
                $scope.startGame();
                $scope.$evalAsync();
            } else {
                return;
            }
        }
    });

    $scope.startGame = function () {

        if (!$scope.gamePlaying) {
            $scope.gamePlaying = true;
            $scope.currentGame.update({
                gameStarted: true
            });
            $scope.currentGame.update({
                startTime: Date.now()
            });
        }
        
        $scope.timerNum = '';
        
        $scope.currentGame.on('value', function (snapshot) {
            $scope.startTime = snapshot.val().startTime;
            $scope.timeLimit = snapshot.val().timeLimit;
        });

        interval = setInterval(function () {
            if ($scope.timerNum === '0:00') {
                console.log('YOU EXPLODED!!!!');
                clearInterval(interval);
                $state.go('gameover');
                return;
            }
            var ms = $scope.timeLimit - (Date.now() - $scope.startTime);
            var seconds = function () {
                var s = (ms / 1000) % 60;
                if (s < 10) {
                    return '0' + s.toString().slice(0, 1);
                } else {
                    return s.toString().slice(0, 2);
                }
            }
            $scope.timerNum = (((ms / 1000 / 60) << 0) + ':' + seconds());
            $scope.$evalAsync();
        }, 500);
    };


});