app.config(function ($stateProvider) {

    $stateProvider.state('game', {
        url: '/game/:gameKey/:squad/:userId',
        templateUrl: '/js/game/game.html',
        controller: 'GameCtrl',
        resolve: {
            currgame: function (GameFactory, $stateParams) {
                return GameFactory.promiseToHaveGames($stateParams.gameKey);
            }
        }
    });

});

app.controller('GameCtrl', function ($scope, $stateParams, $state, $rootScope, $mdToast, $http) {

    $scope.currentStage = 0;

    $scope.userId = $stateParams.userId;
    $rootScope.userId = $scope.userId;


    $scope.swiped = false;

    $scope.onSwipeRight = function (ev) {
        console.log('swiped right!')
        if (!$scope.swiped) {
            $scope.swiped = true;
        }
    };

    $scope.onSwipeLeft = function (ev) {
        console.log('swiped left!');
        if ($scope.swiped) {
            $scope.swiped = false;
        }
    };

    let interval;
    var rootRef = firebase.database().ref('/game');
    $scope.currentGame = rootRef.child($stateParams.gameKey);

    $scope.currentGame.child('batteries').once('value', function (snap) {
        $scope.batteries = snap.val();
        for(var i=0; i<$scope.batteries.length;i++){
            console.log('batteriesssss color', $scope.batteries[i].color)
        }


        $scope.userId = $rootScope.userId;
    })

    $scope.currentGame.once('value', function (snap) {
        $scope.stages = snap.val().stages;
        $scope.currentModule = $scope.stages[$scope.currentStage].modules[0];
        $scope.squadName = snap.val().squadname;
        $scope.$evalAsync();
    });

    $scope.currentGame.child('currentStage').on('value', function (snap) {
        $scope.currentStage = snap.val();
        if ($scope.gamePlaying) {
            if ($scope.currentStage === $scope.stages.length) {
                $scope.currentGame.once('value')
                    .then(function (snap2) {
                        console.log("this is the creatorId", snap2.val().creatorId)
                        console.log("this is the userId", snap2.val().creatorId)
                        if (snap2.val().creatorId !== $scope.userId) {
                            console.log("I am not the creator");
                            $scope.currentGame = null;
                            clearInterval(interval);
                            $state.go('victory');
                        } else {
                            console.log('I am the creator');
                            $scope.currentGame.update({
                                gameStatus: 'victory'
                            });
                            var logGame = snap2.val();
                            logGame.gameStatus = 'victory';
                            $http.post('/api/games/logGame', logGame)
                                .then(() => {
                                    clearInterval(interval);
                                    $scope.currentGame = null;
                                    $state.go('victory')
                                });
                        }
                    });
            }
        }
    });



    $scope.currentGame.child('strikes').on('value', function (snapshot) {
        $scope.strikes = snapshot.val();
        if ($scope.strikes[0]['active']) {
            $mdToast.show({
                hideDelay: 1000,
                position: 'bottom right',
                controller: 'ToastCtrl',
                template: '<md-toast>' +
                    '<div class="md-toast-content" style="background-color: #3836EB">' +
                    "STRIKE!" +
                    '</div>' +
                    '</md-toast>'
            });
        }
        if ($scope.strikes[2]['active']) {
            $scope.currentGame = null;
            clearInterval(interval);
            $state.go('gameover');
        }
        $scope.$evalAsync();
    });

    $scope.gamePlaying = null;

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

});
