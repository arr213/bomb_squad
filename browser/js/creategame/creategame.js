app.config(function ($stateProvider) {

    $stateProvider.state('create', {
        url: '/create',
        templateUrl: 'js/creategame/creategame.html',
        controller: 'CreateGameCtrl'
    });

});

app.controller('CreateGameCtrl', function($scope, $http, $state){

    $scope.things = "HERE"

    $scope.click = function(){
        console.log("I was clicked!!");
    };

    $scope.submit = function() {
        console.log("Creating Game");
    };


    $scope.createGame = function() {
        console.log("Creating Game");
        $http.post('/api/games/createGame', {squadname: $scope.squadname})
            .then(function(res) {
                $state.go('staging', { gameKey: res.data, squadname: $scope.squadname });
            });
    };

});
