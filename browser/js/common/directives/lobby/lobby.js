app.directive('lobby', function() {

    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/lobby/lobby.html',
        controller: 'LobbyController'
    };

});

app.controller('LobbyController', function($scope, $http, AuthService, $state) {

/////////////////////////////////
///////////PUBLIC CHAT///////////
/////////////////////////////////
    var publicChatRef = firebase.database().ref('/public-chat');
   // var publicChatRef = firebase.database().ref().child('chat');
   console.log()

    publicChatRef.once('value', function(snap){
        $scope.lobbyChat = snap.val();
        console.log('lobby chat', $scope.lobbyChat);

        $scope.$evalAsync();
    })


    AuthService.getLoggedInUser()
        .then(function(user) {
            $scope.username = user.username;
        })

    $scope.lobbyMessages = [];

      publicChatRef.on('child_added', function(snap) {
          if($scope.messages){
          $scope.messages.push(snap.val())
          }
      })


      $scope.submit = function(chatMsg) {
          chatMsg = angular.copy(chatMsg);
          publicChatRef.push({ username: $scope.username, 'message': chatMsg })
      }

 ////////////////////////////////


    $scope.createGame = function() {
        console.log("Creating Game");
        $http.post('/api/games/createGame')
            .then(function(res) {
                $state.go('staging', { gameKey: res.data });
            });
    };
    $scope.joinGame = function() {
        console.log("Joining Game ", $scope.gamePass);
        $http.put('/api/games/joinGame', { gamePass: $scope.gamePass })
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
