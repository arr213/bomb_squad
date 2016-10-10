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

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.once('value', function (snap) {
        $scope.gamePass = snap.val().gamePass;
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
        gameRef.child('readyUp').once('value', function (snap) {
            // if (clickedReady) {
            //     gameRef.update({
            //         'readyUp': snap.val() - 1
            //     });
            //     clickedReady = false;
            // } else {
                if(!clickedReady){
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
            template:
        '<md-toast>' +
          '<div class="md-toast-content">' +
            readyCount+' users have clicked ready!' +
          '</div>' +
        '</md-toast>'
        });
    };

    gameRef.child('readyUp').on('value', function (snap) {

        let readyCount = snap.val();

        showReadyCount(readyCount);

        if (readyCount === $scope.userCount) {
            StagingFactory.updateGame($stateParams.gameKey)
                .then(function (updatedGame) {
                    $state.go('game', {
                        gameKey: $stateParams.gameKey,
                        squad : $scope.squad,
                        userId : user.id
                    });
                })
                .catch($log.error);

        }
    });

   


})