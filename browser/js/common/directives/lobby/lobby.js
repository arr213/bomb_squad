app.directive('lobby', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/lobby/lobby.html',
        controller: 'LobbyController'
    };

});

app.controller('LobbyController', function($scope, $http, AuthService, $state) {

    var publicChatRef = firebase.database().ref('/public-chat');

    publicChatRef.once('value', function(snap) {
        $scope.lobbyChat = snap.val();
        $scope.$evalAsync();
    });

    AuthService.getLoggedInUser()
        .then(function(user) {
            $scope.username = user.username;
        });

    $scope.lobbyMessages = [];

    publicChatRef.on('child_added', function(snap) {
        if ($scope.messages) $scope.messages.push(snap.val());
    });

    $scope.submit = function(chatMsg) {
        chatMsg = angular.copy(chatMsg);
        publicChatRef.push({ username: $scope.username, 'message': chatMsg })
    };

    $scope.joinGame = function() {
        $http.put('/api/games/joinGame', { gamePass: $scope.gamePass.toUpperCase() })
            .then(function(res) {
                $state.go('staging', { gameKey: res.data });
            });
    };

    $scope.logout = function() {
        AuthService.logout()
            .then(function(loggingOut) {
                $state.go('login');
            });
    };


});
