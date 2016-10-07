app.factory('StagingFactory', function($http) {
    return {

        updateGame: function(gameKey) {
            return $http.put('/api/games/startGame/' + gameKey)
                    .then(response => response.data);
        }

    };
});
