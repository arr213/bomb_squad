app.config(function ($stateProvider) {

    $stateProvider.state('staging', {
        url: '/staging/:gameKey',
        templateUrl: 'js/staging/staging.html',
        controller: 'StagingCtrl'
    });

});

app.controller('StagingCtrl', function($http, $scope, $stateParams, $firebaseObject){

    let gameRef = firebase.database().ref('/game').child($stateParams.gameKey);
    
    gameRef.once('value', function(snap){
        $scope.gamePass = snap.val().gamePass;
        $scope.$digest();
    });

    gameRef.child('users').on('value', function(snap){
        console.log(snap.val());
        $scope.usersJoined = snap.val().length;
        console.log(snap.val()[$scope.usersJoined-1]);
        // $http.get('/api/members/name/'+String(snap.val[$scope.usersJoined]))
        // .then(function(gettingName){
        //     if($scope.usernames){
        //         $scope.usernames.push(gettingName.data)
        //     } else {
        //         $scope.usernames = [gettingName.data];
        //     }
        // });
        $scope.$digest();
    })

});

