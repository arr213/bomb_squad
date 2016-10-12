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

    $scope.gameMode = "STANDARD";

    $scope.changeMode = function() {
        if ($scope.gameMode === "STANDARD") {
            $scope.gameMode = "CUSTOM";
        } else {
            $scope.gameMode = "STANDARD";
        }
    };

    $scope.createGame = function(squadname) {
        
        if($scope.gameMode === 'CUSTOM'){
            modPerPerson = $scope.modPerPerson || 2;
            timePerMod = $scope.timePerMod || 45000;
        }

        console.log("Creating Game");
        $http.post('/api/games/createGame', {squadname: squadname, modPerPerson: modPerPerson, timePerMod: timePerMod , gameMode: $scope.gameMode})
            .then(function(res) {
                console.log('#############', res.data)
                $state.go('staging', { gameKey: res.data, squadname: squadname });
            });
    };

});
