app.directive('lobby', function () {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/lobby/lobby.html',
        controller: 'LobbyController'
    };

});

app.controller('LobbyController', function($scope, $firebaseObject, $http, AuthService, $state){

    $scope.createGame = function(){
        console.log("Creating Game");
        $http.post('/api/games/addGame')
        .then(function(res){
            console.log(res.data);
        })
    };
    $scope.joinGame = function(){
        console.log("Joining Game ", $scope.gamePass);
        $http.put('/api/games/joinGame', {gamePass: $scope.gamePass})
        .then(function(res){
            console.log(res.data);
        });
    };
    $scope.logout = function(){
        AuthService.logout()
        .then(function(loggingOut){
            $state.go('login');
        });
    };


});