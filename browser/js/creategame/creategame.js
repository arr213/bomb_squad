app.config(function ($stateProvider) {

    $stateProvider.state('create', {
        url: '/create',
        templateUrl: 'js/creategame/creategame.html',
        controller: 'CreateGameCtrl'
    });

});

app.controller('CreateGameCtrl', function($scope, $http, $state){

    let modPerPerson = 2;
    let timePerMod = 45000;
    let gameMode = 'standard';

    $scope.things = "HERE"

    $scope.click = function(){
        console.log("I was clicked!!");
    };

    $scope.submit = function() {
        console.log("Creating Game");
    };


    $scope.createGame = function(squadname) {
        
        if($scope.gameMode === 'custom'){
            let modPerPerson = $scope.modPerPerson;
            let timePerMod = $scope.timePerMod;
        }

        console.log("Creating Game");
        $http.post('/api/games/createGame', {squadname: squadname, modPerPerson: modPerPerson, timePerMod: timePerMod , gameMode: gameMode})
            .then(function(res) {
                console.log('#############', res.data)
                $state.go('staging', { gameKey: res.data, squadname: squadname });
            });
    };

});
