app.factory('GameFactory', function($q, $firebase){
    return {
        
        promiseToHaveGames: function(gameKey) {
            return firebase.database().ref('/game').child(gameKey).once('value')
            .then(function(snap){
                return snap.val();
            });
        }
    }
});