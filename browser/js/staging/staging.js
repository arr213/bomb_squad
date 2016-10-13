app.config(function($stateProvider) {

    $stateProvider.state('staging', {
        url: '/staging/:gameKey',
        templateUrl: 'js/staging/staging.html',
        controller: 'StagingCtrl',
        resolve: {
            user: function(AuthService) {
                return AuthService.getLoggedInUser();
            }
        }
    });

});

app.controller('StagingCtrl', function($http, $scope, $stateParams, $log, user, $state, StagingFactory, $mdToast) {

    $scope.swiped = false;

    $scope.onSwipeRight = function() {
        if (!$scope.swiped) {
            $scope.swiped = true;
        }
    };

    $scope.onSwipeLeft = function() {
        if ($scope.swiped) {
            $scope.swiped = false;
        }
    };


    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.once('value', function(snap) {
        $scope.gamePass = snap.val().gamePass;
        $scope.squadname = snap.val().squadname;
        $scope.creatorId = snap.val().creatorId;
        $scope.$evalAsync();
    });

    gameRef.child('users').on('value', function(snap) {
        $scope.userCount = snap.val().length;
        $scope.usersJoined = snap.val();
        $scope.$evalAsync();
    });


    gameRef.child('readyUp').on('value', function(snap) {
        $scope.readyArray = snap.val();
        $scope.$evalAsync();
    });

    gameRef.child('gameReady').on('value', function(snap) {
        if (snap.val()) {
            $state.go('game', {
                gameKey: $stateParams.gameKey,
                squad: $scope.squad,
                userId: user.id
            });
        }
    })

    $scope.clickedReady = false;

    $scope.ready = function() {
        console.log('clicked');
        gameRef.child('readyUp').once('value', function(snap) {
            // if (clickedReady) {
            //     gameRef.update({
            //         'readyUp': snap.val() - 1
            //     });
            //     clickedReady = false;
            // } else {
            if (!$scope.clickReady) {
                gameRef.update({ readyUp: snap.val() + 1 });
                $scope.clickReady = true;
            }
        });

    };

    const showReadyCount = function(readyCount) {
        $mdToast.show({
            hideDelay: 1000,
            position: 'bottom right',
            controller: 'ToastCtrl',
            template: '<md-toast>' +
                '<div class="md-toast-content" style="background-color: #3836EB">' +
                readyCount + ' users have clicked ready!' +
                '</div>' +
                '</md-toast>'
        });
    };

    gameRef.child('readyUp').on('value', function(snap) {

        let readyCount = snap.val();
        showReadyCount(readyCount);

        if (readyCount === $scope.userCount && $scope.creatorId === String(user.id)) {
            StagingFactory.updateGame($stateParams.gameKey)
                .then(() => console.log('the game is ready!'))
                .catch($log.error);
        }
    });


})
