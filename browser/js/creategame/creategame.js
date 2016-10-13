app.config(function($stateProvider) {

    $stateProvider.state('create', {
        url: '/create',
        templateUrl: 'js/creategame/creategame.html',
        controller: 'CreateGameCtrl'
    });

});

app.controller('CreateGameCtrl', function($scope, $http, $state) {

    let modPerPerson = 2;
    let timePerMod = 45000;

    $scope.gameMode = 'STANDARD';

    $scope.changeMode = function() {
        if ($scope.gameMode === 'STANDARD') {
            $scope.gameMode = 'CUSTOM';
        } else {
            $scope.gameMode = 'STANDARD';
        }
    };

    $scope.createGame = function(squadname) {

        if ($scope.gameMode === 'CUSTOM') {
            modPerPerson = $scope.modPerPerson || 2;
            timePerMod = $scope.timePerMod * 1000 || 45000;
        }

        $http.post('/api/games/createGame', { squadname: squadname, modPerPerson: modPerPerson, timePerMod: timePerMod, gameMode: $scope.gameMode })
            .then(function(res) {
                $state.go('staging', { gameKey: res.data, squadname: squadname });
            });
    };

});
