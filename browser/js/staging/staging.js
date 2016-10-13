app.config(function ($stateProvider) {

    $stateProvider.state('staging', {
        url: '/staging/:gameKey',
        templateUrl: 'js/staging/staging.html',
        controller: 'StagingCtrl',
        resolve: {
            user: function (AuthService) {
                return AuthService.getLoggedInUser();
            }
        }
    });

});

app.controller('StagingCtrl', function ($http, $scope, $stateParams, $log, user, $state, StagingFactory, $mdToast) {

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

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.once('value', function (snap) {
        $scope.gamePass = snap.val().gamePass;
        $scope.squadname = snap.val().squadname;
        $scope.creatorId = snap.val().creatorId;
        $scope.$evalAsync();
    });

    gameRef.child('users').on('value', function (snap) {
        $scope.userCount = snap.val().length;
        $scope.usersJoined = snap.val();
        $scope.$evalAsync();
    });


    gameRef.child('readyUp').on('value', function (snap) {
        $scope.readyArray = snap.val();
        $scope.$evalAsync();
        var key = $stateParams.gameKey
            // console.log('readyArray: ', $scope.readyArray);
    });

    let clickedReady = false;

    $scope.ready = function () {
        console.log('clicked');
        gameRef.child('readyUp').once('value', function (snap) {
            // if (clickedReady) {
            //     gameRef.update({
            //         'readyUp': snap.val() - 1
            //     });
            //     clickedReady = false;
            // } else {
            if (!clickedReady) {
                gameRef.update({
                    'readyUp': snap.val() + 1
                });
                clickedReady = true;
            }
            // }
        });

    };

    const showReadyCount = function (readyCount) {
        $mdToast.show({
            hideDelay: 1000,
            position: 'bottom right',
            controller: 'ToastCtrl',
            template: '<md-toast>' +
                '<div class="md-toast-content" style="background-color: #000000">' +
                readyCount + ' users have clicked ready!' +
                '</div>' +
                '</md-toast>'
        });
    };

    gameRef.child('readyUp').on('value', function (snap) {

        let readyCount = snap.val();

        let gameStart = function () {
            $state.go('game', {
                gameKey: $stateParams.gameKey,
                squad: $scope.squad,
                userId: user.id
            });
        }

        showReadyCount(readyCount);
        console.log('readyCount', readyCount);
        console.log('$scope.userCount', $scope.userCount);

        if (readyCount === $scope.userCount) {
            if ($scope.creatorId === String(user.id)) {
                console.log("I am the creator and I am updating the game!");
                StagingFactory.updateGame($stateParams.gameKey)
                    .then(() => gameStart())
                    .catch($log.error);
            } else {
                console.log('I am not updating the game')
                var delayed = function() {
                    window.setTimeout(gameStart, 1000);
                }();
            }

        }
    });




})
