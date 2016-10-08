app.config(function ($stateProvider) {

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

app.controller('StagingCtrl', function($http, $scope, $stateParams, $firebaseObject, $firebaseArray, $log, user, $state, StagingFactory){

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);

    gameRef.once('value', function(snap){
        $scope.gamePass = snap.val().gamePass;
        $scope.$evalAsync();
    });

    gameRef.child('users').on('value', function(snap){
        // console.log(snap.val());
        $scope.userCount = snap.val().length;
        $scope.usersJoined = snap.val();
       // console.log(snap.val()[$scope.usersJoined-1]);
        // $http.get('/api/members/name/'+String(snap.val[$scope.usersJoined]))
        // .then(function(gettingName){
        //     if($scope.usernames){
        //         $scope.usernames.push(gettingName.data)
        //     } else {
        //         $scope.usernames = [gettingName.data];
        //     }
        // });
        $scope.$evalAsync();
    });


    gameRef.child('readyUp').on('value', function(snap){
        $scope.readyArray = snap.val();
        $scope.$evalAsync();
        var key = $stateParams.gameKey
        // console.log('readyArray: ', $scope.readyArray);
    });

    let clickedReady = false;

    $scope.ready = function() {
        gameRef.child('readyUp').once('value', function(snap) {
            if(clickedReady){
                gameRef.update({'readyUp' : snap.val() - 1});
                clickedReady = false;
            } else {
                gameRef.update({'readyUp' : snap.val() + 1});
                clickedReady = true;
            }
            // if (snap.val().indexOf(user.id.toString()) !== -1) {
            //     gameRef.child('readyUp').push(user.id);
            //     //snap.val().$add(user.id.toString());
            // } else {
            //     snap.val().$remove(user.id.toString());
            // }
        });

    };

    gameRef.child('readyUp').on('value', function(snap){
        if(snap.val()===$scope.userCount){
            StagingFactory.updateGame($stateParams.gameKey)
            .then(function(updatedGame) {
                $state.go('game', {gameKey: $stateParams.gameKey});
            })
            .catch($log.error);

        }
    });

});

